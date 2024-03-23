"use client"
import { motion } from "framer-motion";
import { findSettingByKey } from "@/helper/settingHelper";

export default function SplashScreen({ onAnimationComplete }: { onAnimationComplete: () => void }) {

    const loadingImageSetting = findSettingByKey("loading-image");
    
    return (
        <>
          {loadingImageSetting && (
            <div id="preloader">
              <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ duration: 1 }}
                  onAnimationComplete={onAnimationComplete}
                >
                  <img src={`${process.env.NEXT_PUBLIC_STORAGE_URL}${loadingImageSetting?.value}`} alt="Splash Logo"/>
                </motion.div>
              </div>
            </div>
          )}
        </>
      );
      
  }