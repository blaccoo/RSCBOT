import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const EnergyContext = createContext();

const refillTime = 2 * 60 * 1000; // 2 minutes in milliseconds
const maxEnergy = 500;
const refillRate = 2; // Amount of energy refilled every interval (2 units)

const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(maxEnergy); // Initialize with max energy
  const [displayEnergy, setDisplayEnergy] = useState(maxEnergy);
  const [idme, setIdme] = useState("");
  const [count, setCount] = useState(0);
  const [lastInteraction, setLastInteraction] = useState(null);

  // On load: fetch last interaction, calculate energy
  useEffect(() => {
    const fetchAndCalculateEnergy = async () => {
      if (idme) {
        const lastInteractionTime = await fetchLastInteraction(idme);
        if (lastInteractionTime) {
          const currentTime = Date.now();
          const timeElapsed = currentTime - lastInteractionTime;

          // Calculate energy based on the time elapsed since the last interaction
          const refillsSinceLastInteraction = Math.floor(timeElapsed / refillTime);
          const newEnergy = Math.min(refillsSinceLastInteraction * refillRate, maxEnergy);

          setEnergy(newEnergy);
          setDisplayEnergy(newEnergy);
        }
      }
    };

    fetchAndCalculateEnergy();
  }, [idme]); // Re-run if `idme` changes (e.g., user logs in)

  // Energy refill logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy) => {
          const newEnergy = Math.min(prevEnergy + refillRate, maxEnergy);
          setDisplayEnergy(newEnergy);
          if (idme) {
            updateUserStatsInFirestore(idme, count, newEnergy); // Update Firestore
          }
          return newEnergy;
        });
      }
    }, refillTime / 100); // Adjust as needed for smaller increments
    return () => clearInterval(interval);
  }, [energy, count, idme]);

  // Update user stats in Firestore
  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userid));
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        updateDoc(doc.ref, { count: newCount, energy: newEnergy, lastInteraction: new Date() });
      });
      console.log("User stats updated:", { newCount, newEnergy });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // Fetch the last interaction time from Firestore
  const fetchLastInteraction = async (userId) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userId));
      const querySnapshot = await getDocs(userRef);
      if (!querySnapshot.empty) {
        let lastInteractionTimestamp = null;
        querySnapshot.forEach((doc) => {
          lastInteractionTimestamp = doc.data().lastInteraction;
        });
        if (lastInteractionTimestamp) {
          return lastInteractionTimestamp.seconds * 1000; // Convert Firestore timestamp to milliseconds
        }
      }
      return null;
    } catch (error) {
      console.error("Error fetching last interaction:", error);
      return null;
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
        lastInteraction,
      }}
    >
      {children}
    </EnergyContext.Provider>
  );
};

export { EnergyContext, EnergyProvider };
