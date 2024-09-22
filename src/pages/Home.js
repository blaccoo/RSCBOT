
import React, { useState,useCallback , useEffect, useRef, useContext } from "react";
import { db } from "../firebase";

import { collection, addDoc, getDocs, updateDoc, where,  query } from "firebase/firestore";
import styled, { keyframes } from "styled-components";
import ModalForBOTClaim from "../components/ModalForBOTClaim";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import CurrentBalanceFrame from "../components/CurrentBalanceFrame";
import Title from "../components/Title";
import "../components/FooterStartFrame9.css";
import FooterSection from "../components/FooterSection";
import "./Home.css";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Divider2 from "../components/Divider2";
import { EnergyContext } from "../context/EnergyContext";


const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-350px);
  }
`;

const SlideUpText = styled.div`
  position: absolute;
  animation: ${slideUp} 3s ease-out;
  font-size: 2.1em;
  color: #ffffffa6;
  font-weight: 600;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;
  z-index:1;
  pointer-events: none; /* To prevent any interaction */
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const EnergyFill = styled.div`
  background-color: #e39725;
  height: 12px;
  border-radius: 6px;
  width: ${({ percentage }) => percentage}%;
`;


const Home = () => {

  const { energy, setEnergy, displayEnergy, setDisplayEnergy, idme, setIdme, count, setCount } = useContext(EnergyContext);
    // eslint-disable-next-line
  const [username, setUsername] = useState("");
    // eslint-disable-next-line
  const [name, setName] = useState("");
  const imageRef = useRef(null);
  const [clicks, setClicks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLevels, setShowLevels] = useState(false);
    const [error, setError] = useState("");
    const [interraction, setinterraction] = useState("");



  //Modals
  const [isModalForBOTClaimOpen, setModalForBOTClaimOpen] = useState(false);
  const navigate = useNavigate();

  const openModalForBOTClaim = useCallback(() => {
    setModalForBOTClaimOpen(true);
  }, []);

  const closeModalForBOTClaim = useCallback(() => {
    setModalForBOTClaimOpen(false);
  }, []);

  const onProfileIconClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  const onWalletContainerClick = useCallback(() => {
    navigate("/boast");
  }, [navigate]);

  const handleClick = (e) => {
    if (energy > 0) {
      const { offsetX, offsetY, target } = e.nativeEvent;
      const { clientWidth, clientHeight } = target;

      const horizontalMidpoint = clientWidth / 2;
      const verticalMidpoint = clientHeight / 2;

      const animationClass =
        offsetX < horizontalMidpoint
          ? "wobble-left"
          : offsetX > horizontalMidpoint
          ? "wobble-right"
          : offsetY < verticalMidpoint
          ? "wobble-top"
          : "wobble-bottom";

      // Remove previous animations
      imageRef.current.classList.remove(
        "wobble-top",
        "wobble-bottom",
        "wobble-left",
        "wobble-right"
      );

      // Add the new animation class
      imageRef.current.classList.add(animationClass);

      // Remove the animation class after animation ends to allow re-animation on the same side
      setTimeout(() => {
        imageRef.current.classList.remove(animationClass);
      }, 500); // duration should match the animation duration in CSS

      // Increment the count
      const rect = e.target.getBoundingClientRect();
      const newClick = {
        id: Date.now(), // Unique identifier
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const updatedCount = count + 2; // Increment count by 5
      const updatedEnergy = energy - 2;

      setClicks((prevClicks) => [...prevClicks, newClick]);
      setCount(updatedCount);
      setEnergy(updatedEnergy);
      setDisplayEnergy(updatedEnergy); // Update display energy

      updateUserStatsInFirestore(idme, updatedCount, updatedEnergy);
      console.log(idme);
      
      // Remove the click after the animation duration
      setTimeout(() => {
        setClicks((prevClicks) =>
          prevClicks.filter((click) => click.id !== newClick.id)
        );
      }, 1000); // Match this duration with the animation duration
    }
  };

  useEffect(() => {
    // Fetch username and user ID from Telegram Web App context
    const telegramName =
      window.Telegram.WebApp.initDataUnsafe?.user?.first_name;
    const telegramLastName =
      window.Telegram.WebApp.initDataUnsafe?.user?.last_name;
    const telegramUsername =
      window.Telegram.WebApp.initDataUnsafe?.user?.username;
    const telegramUserid = window.Telegram.WebApp.initDataUnsafe?.user?.id;

    if (telegramName) {
      setName(telegramName + " " + telegramLastName);
    }

    if (telegramUsername) {
      setUsername(telegramUsername);
    }
    if (telegramUserid) {
      setIdme(telegramUserid);
      fetchLastInteraction(idme);
    }

    if (telegramUsername && telegramUserid) {
      saveRefereeIdToFirestore();
    }




    // Fetch count and energy from Firestore when component mounts
    if (telegramUserid) {
      fetchUserStatsFromFirestore(telegramUserid)
        .then((userStats) => {
          if (isNaN(userStats.count)) {
            setCount(0);
            updateUserStatsInFirestore(telegramUserid, 0, 500);
          } else {
            setCount(userStats.count);
            setEnergy(userStats.energy);
            setDisplayEnergy(userStats.energy); // Update display energy
          }
          setLoading(false); // Set loading to false after fetching count
        })
        .catch(() => {
          setCount(0); // Set count to 0 if fetching fails
          setEnergy(500); // Set energy to 500 if fetching fails
          setLoading(false);
        });
    }
    // eslint-disable-next-line
  }, []);

  const saveRefereeIdToFirestore = async () => {
    // Fetch username and user ID from Telegram Web App context
    const telegramUsername =
      window.Telegram.WebApp.initDataUnsafe?.user?.username;
    const telegramUserid = window.Telegram.WebApp.initDataUnsafe?.user?.id;
    const telegramName =
      window.Telegram.WebApp.initDataUnsafe?.user?.first_name;
    const telegramLastName =
      window.Telegram.WebApp.initDataUnsafe?.user?.last_name;

    const fullName = telegramName + " " + telegramLastName;

    const queryParams = new URLSearchParams(window.location.search);
    let refereeId = queryParams.get("ref");
    if (refereeId) {
      // Remove all non-numeric characters
      refereeId = refereeId.replace(/\D/g, "");
    }

    if (telegramUsername && telegramUserid) {
      await storeUserData(
        fullName,
        telegramUsername,
        telegramUserid,
        refereeId
      );
    }
  };

  const fetchLastInteraction = async (userId) => {
    try {
      const userRef = query(collection(db, "telegramUsers"), where("userId", "==", userId));
      const querySnapshot = await getDocs(userRef);
  
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          const lastInteraction = doc.data().lastInteraction.toDate(); // Convert Firestore timestamp to Date
          console.log("Last Interaction:", lastInteraction);
          setinterraction(lastInteraction);

        });
      } else {
        console.log("No user found with that ID.");
      }
    } catch (error) {
      console.error("Error fetching last interaction:", error);
    }
  };

  const storeUserData = async (fullname, username, userid, refereeId) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      let userExists = false;

      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          userExists = true;
        }
      });

      if (!userExists) {
        await addDoc(userRef, {
          fullname: fullname,
          username: username,
          userId: userid,
          count: 0, // Initialize count
          energy: 500, // Initialize energy
          refereeId: refereeId || null, // Store refereeId if present
          timestamp: new Date(),
        });
        // console.log("User data stored:", { username, userid, refereeId });
      } else {
        // console.log("User already exists:", { username, userid });
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateUserStatsInFirestore = async (userid, newCount, newEnergy) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          updateDoc(doc.ref, { count: newCount, energy: newEnergy });
        }
      });
      // console.log("User stats updated:", { newCount, newEnergy });
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const fetchUserStatsFromFirestore = async (userid) => {
    try {
      const userRef = collection(db, "telegramUsers");
      const querySnapshot = await getDocs(userRef);
      let userStats = { count: 0, energy: 500 };
      querySnapshot.forEach((doc) => {
        if (doc.data().userId === userid) {
          userStats = { count: doc.data().count, energy: doc.data().energy };
        }
      });
      return userStats;
    } catch (e) {
      console.error("Error fetching document: ", e);
      return { count: 0, energy: 500 };
    }
  };

  const formattedCount = new Intl.NumberFormat()
    .format(count)
    .replace(/,/g, " ");


  

  return (
    <>
     {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <div className="home">
      <Header/>
        <div className="home-body-frame2">
      
         
          <Divider/>
          <CurrentBalanceFrame
            prop={formattedCount}
            divColor="#e4e4f0"
            lvlBronzeColor="#e4e4f0"
          />
          <Title
            frameDivHeight="60px"
            frameDivOverflowY="auto"
            vector="/vector3.svg"
            vector1="/vector4.svg"
            vector2="/vector5.svg"
            vector3="/vector8.svg"
            vector4="/vector9.svg"
            vector5="/vector3.svg"
            vector6="/vector4.svg"
            vector7="/vector5.svg"
            vector8="/vector9.svg"
            referralCountColor="#fff"
            fRIENDSColor="#fff"
            taskKeyColor="#fff"
            kEYSColor="#fff"
          />
          <div className="mining-frame2">
            <div className="mining-frame3">
              <div className="mining-info-frame">

        



                <Container>


              
                  <img
                    // className="mining-button-icon"
            
                    src="/mining-button@2x.png"

                    onPointerDown={handleClick}
                    ref={imageRef}
               
                    alt="Wobble"
                    className="wobble-image select-none"
                  />


                  
{clicks.map((click) => (
                    <SlideUpText key={click.id} x={click.x} y={click.y}>
                      +2
                    </SlideUpText>
                  ))}
                

                </Container>



                <div className="wallet24" onClick={openModalForBOTClaim}>
                  <img
                    className="hugeiconschat-bot"
                    alt=""
                    src="/hugeiconschatbot1.svg"
                  />
                  <div className="bot">BOT</div>
                </div>
              </div>
            </div>
            <div className="footer-start-frame41">
      <div className="wallet-parent22">
        <div className="wallet125">
          <img
            className="simple-line-iconsenergy"
            alt=""
            src="/simplelineiconsenergy1.svg"
          />
          <div className="div189">{displayEnergy}/500</div>
        </div>
      
        <div className="wallet126" onClick={onWalletContainerClick}>
          <img
            className="simple-line-iconsenergy"
            alt=""
            src="/hugeiconsfire.svg"
          />
          <div className="div189">Boast</div>
        </div>
      </div>
    
    </div>  
    
    <div style={{ width:"100%", padding:"0.3rem", marginInline:"0.3rem",backgroundColor:"#fff", borderRadius:"0.8rem" }}>
    <EnergyFill percentage={(energy / 500) * 100} />   
              </div>



              <div style={{height:"90px",width:"90px", backgroundColor:"red"}}>{interraction}</div>
            <div className="footer-start-frame4">
              <div className="footer-frame3">
                <div className="home-referral3">
                  <div className="referal-frame3">
                    <div className="referal-text3">
                      <div className="refer-friends-to3">
                        Refer friends to get 5000 referral bonus now
                      </div>
                    </div>
                    <div className="frame-parent15">
                      <div className="httpsrisingcoinxyzrefant-wrapper1">
                        <div className="bot">
                          https://risingcoin.xyz?ref=anthonyeyo
                        </div>
                      </div>
                      <div className="rectangle-parent6">
                        <div className="frame-child8" />
                        <div className="frame-child9" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider2/>
          <FooterSection />
        </div>
      </div>
      {isModalForBOTClaimOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalForBOTClaim}
        >
          <ModalForBOTClaim onClose={closeModalForBOTClaim} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
