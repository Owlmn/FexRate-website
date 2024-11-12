import React from "react";
import styles from "./CollaborationPage.module.css";
import Header from "./Header";
import Footer from "./Footer";
import CollaborationIntro from "./CollaborationIntro";
import RewardOptions from "./RewardOptions";
import OnlineWork from "./OnlineWork";
import CollaborationSteps from "./CollaborationSteps";
import ContactInfo from "./ContactInfo";

function CollaborationPage() {
  return (
    <main className={styles.collaborationPage}>
      <Header />
      <CollaborationIntro />
      <RewardOptions />
      <OnlineWork />
      <CollaborationSteps />
      <ContactInfo />
      <Footer />
    </main>
  );
}

export default CollaborationPage;
