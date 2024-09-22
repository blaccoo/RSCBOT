import React, { createContext, useState, useEffect } from "react";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const EnergyContext = createContext();

const refillRate = 2; // 2 energy points
const refillTime = 2 * 60 * 1000; // 2 minutes in milliseconds
const maxEnergy = 500;

const EnergyProvider = ({ children }) => {
  const [energy, setEnergy] = useState(maxEnergy);
  const [displayEnergy, setDisplayEnergy] = useState(maxEnergy);
  const [idme, setIdme] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // On app load, fetch user data and calculate current energy
    const fetchUserDataAndCalculateEnergy = async () => {
      if (idme) {
        const userRef = collection(db, "telegramUsers");
        const querySnapshot = await getDocs(userRef);
        querySnapshot.forEach((doc) => {
          if (doc.data().userId === idme) {
            const lastInteraction = doc.data().lastInteraction.toDate(); // Convert Firestore timestamp to Date
            const currentTime = new Date();
            const elapsedTime = currentTime - lastInteraction; // Elapsed time in milliseconds

            // Calculate how much energy has been restored since the last interaction
            const energyRestored = Math.floor(elapsedTime / refillTime) * refillRate;
            const newEnergy = Math.min(doc.data().energy + energyRestored, maxEnergy);

            // Update the energy and displayEnergy states
            setEnergy(newEnergy);
            setDisplayEnergy(newEnergy);

            // Optionally update Firestore with the new energy
            updateUserStatsInFirestore(idme, count, newEnergy);
          }
        });
      }
    };

    fetchUserDataAndCalculateEnergy();
  }, []);



  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          updateDoc(doc.ref, {
            count: newCount,
            energy: newEnergy,
            lastInteraction: new Date(),
          });
        }
      });
      console.log("User stats updated:", { newCount, newEnergy });
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
