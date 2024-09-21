import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const EnergyContext = createContext();

const refillTime = 2 * 60 * 1000; // 2 minutes in milliseconds
const refillAmount = 2; // Amount of energy to refill every interval
const maxEnergy = 500; // Maximum energy

const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(500);
  const [displayEnergy, setDisplayEnergy] = useState(500);
  const [idme, setIdme] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (idme) {
      // Fetch user data on mount or when idme changes
      getUserDataFromFirestore(idme).then((userData) => {
        if (userData) {
          const lastRefillTime = userData.lastRefillTime?.toDate() || new Date();
          const newEnergy = calculateEnergy(userData.energy, lastRefillTime);
          setEnergy(newEnergy);
          setDisplayEnergy(newEnergy);
          // Save new energy and update the last refill time in Firestore
          updateUserStatsInFirestore(idme, count, newEnergy);
        }
      });
    }
  }, [idme]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (energy < maxEnergy) {
        setEnergy((prevEnergy) => {
          const newEnergy = Math.min(prevEnergy + refillAmount, maxEnergy);
          setDisplayEnergy(newEnergy); // Update display energy when refilling
          if (idme) {
            updateUserStatsInFirestore(idme, count, newEnergy); // Update Firestore with new energy level
          }
          return newEnergy;
        });
      }
    }, refillTime / 100); // Refill in smaller intervals for smoother updates

    return () => clearInterval(interval);
  }, [energy, count, idme]);

  const getUserDataFromFirestore = async (userid) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      let userData = null;
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          userData = doc.data();
        }
      });
      return userData;
    } catch (e) {
      console.error("Error fetching user data: ", e);
      return null;
    }
  };

  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          updateDoc(doc.ref, { 
            count: newCount, 
            energy: newEnergy, 
            lastRefillTime: new Date(), // Save the last refill time
            lastInteraction: new Date() 
          });
        }
      });
      console.log("User stats updated:", { newCount, newEnergy });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  // Calculate energy based on the last refill time
  const calculateEnergy = (currentEnergy, lastRefillTime) => {
    const now = new Date();
    const timeElapsed = now - lastRefillTime; // Time passed in milliseconds
    const energyToRefill = Math.floor(timeElapsed / refillTime) * refillAmount;
    return Math.min(currentEnergy + energyToRefill, maxEnergy);
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
