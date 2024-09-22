import React, { createContext, useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, where,  query } from "firebase/firestore";
import { db } from "../firebase";

const EnergyContext = createContext();

const refillTime = 2 * 60 * 1000; // 2 minutes in milliseconds

const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(500);
  const [displayEnergy, setDisplayEnergy] = useState(500);
  const [idme, setIdme] = useState("");
  const [count, setCount] = useState(0);  
  const [interraction, setinterraction] = useState(0);

  useEffect(() => {
    fetchLastInteraction(idme)

    if( interraction > Date.now()
    ){
      setEnergy(34)
      setDisplayEnergy(34)
      if (idme) {
        updateUserStatsInFirestore(idme, count, energy); // Update Firestore with new energy level
      }
    }
    const interval = setInterval(() => {


      if (energy < 500) {
        setEnergy((prevEnergy) => {
          const newEnergy = Math.min(prevEnergy + 2, 500);
          setDisplayEnergy(newEnergy); // Update display energy when refilling
          if (idme) {
            updateUserStatsInFirestore(idme, count, newEnergy); // Update Firestore with new energy level
          }
          return newEnergy;
        });
      }
    }, refillTime / 100);
    return () => clearInterval(interval);
  }, [energy, count, idme]);

  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          updateDoc(doc.ref, { count: newCount, energy: newEnergy, lastInteraction: new Date() });
        }
      });
      console.log("User stats updated:", { newCount, newEnergy });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };
  

  const fetchLastInteraction = async (userId) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userId));
      const querySnapshot = await getDocs(userRef);
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const lastInteractionTimestamp = doc.data().lastInteraction; // Firestore Timestamp object
          console.log("Last Interaction Timestamp:", lastInteractionTimestamp.seconds); // Log timestamp in seconds
  
          // You can set the timestamp directly to your state or use it however you want
          setinterraction(lastInteractionTimestamp.seconds*1000 + 500); // Store as a Unix timestamp (seconds)
        });
      } else {
        console.log("No user found with that ID.");
      }
    } catch (error) {
      console.error("Error fetching last interaction:", error);
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