import React from "react";
import styles from "./CollaborationPage.module.css";
import CollaborationIntro from "./CollaborationIntro";
import RewardOptions from "./RewardOptions";
import OnlineWork from "./OnlineWork";
import CollaborationSteps from "./CollaborationSteps";
import ContactInfo from "./ContactInfo";

function CollaborationPage() {
  return (
    <main className={styles.collaborationPage}>
      <CollaborationIntro />
      <RewardOptions />
      <OnlineWork />
      <CollaborationSteps />
      <ContactInfo />
    </main>
  );
}

export default CollaborationPage;
