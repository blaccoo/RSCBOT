import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, where, query } from "firebase/firestore";
import { db } from "../firebase";

const EnergyContext = createContext();

const refillTime = 2 * 60 * 1000; // 2 minutes in milliseconds
const maxEnergy = 500;

const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(maxEnergy);
  const [displayEnergy, setDisplayEnergy] = useState(maxEnergy);
  const [idme, setIdme] = useState("");
  const [count, setCount] = useState(0);
  const [interaction, setInteraction] = useState(null); // Store last interaction timestamp

  // Fetch and calculate energy on login
  useEffect(() => {
    if (idme) {
      fetchLastInteraction(idme); // Fetch last interaction on login
    }
  }, [idme]);

  // Compare LastInteraction with current time and calculate energy on login
  const fetchLastInteraction = async (userId) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userId));
      const querySnapshot = await getDocs(userRef);
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const lastInteractionTimestamp = doc.data().lastInteraction; // Firestore Timestamp object
          const lastInteractionSeconds = lastInteractionTimestamp.seconds * 1000; // Convert to milliseconds
  
          // Compare with current time
          const currentTime = Date.now();
          console.log(currentTime);
          console.log(lastInteractionSeconds);

          const timeDiff = currentTime - lastInteractionSeconds; // Time difference in milliseconds
          
          // Calculate how much energy should be restored based on time passed
          const energyRecovered = Math.floor(timeDiff / refillTime) * 2; // 2 energy per refillTime
          const newEnergy = Math.min(maxEnergy, energy + energyRecovered); // Cap at max energy

          // Update state
          setEnergy(newEnergy);
          setDisplayEnergy(newEnergy);
          setInteraction(lastInteractionSeconds);
  
          // Update Firestore with the new energy
          updateUserStatsInFirestore(userId, count, newEnergy);
        });
      } else {
        console.log("No user found with that ID.");
      }
    } catch (error) {
      console.error("Error fetching last interaction:", error);
    }
  };

  // Refill energy every interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy) => {
          const newEnergy = Math.min(prevEnergy + 2, maxEnergy);
          setDisplayEnergy(newEnergy);
          if (idme) {
            updateUserStatsInFirestore(idme, count, newEnergy); // Update Firestore with new energy level
          }
          return newEnergy;
        });
      }
    }, refillTime / 100);
    return () => clearInterval(interval);
  }, [energy, count]);

  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userid));
      const querySnapshot = await getDocs(userRef);
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          updateDoc(doc.ref, { count: newCount, energy: newEnergy, lastInteraction: new Date() });
        });
        console.log("User stats updated:", { newCount, newEnergy });
      } else {
        console.log("No user found with that ID.");
      }
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  return (
    <EnergyContext.Provider
      value={{
        energy,
        setEnergy,
        displayEnergy,
        setDisplayEnergy,
        idme,
        setIdme,
        count,
        setCount,
      }}
    >
      {children}
    </EnergyContext.Provider>
  );
};

export { EnergyContext, EnergyProvider };
