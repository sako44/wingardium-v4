import React from "react";
import Container from "./Container";
import AnimatedHeader from "./AnimatedHeader";
import MotionDiv from "./MotionDiv";
import { animatedHeaderOne } from "@/utils/motionObjects";

function Terms() {
  const privacyPolicy = [
    {
      title: "Information Collection",
      description:
        "We collect personal information (name, email, contact details) and agricultural data (field data, crop information, cost records) when you register and use our services.",
    },
    {
      title: "Use of Data",
      description:
        "The data we collect is used solely to provide and improve our services, including field analysis, cost tracking, stock management, and shipment monitoring.",
    },
    {
      title: "Data Sharing",
      description:
        "We do not sell, rent, or share your personal or agricultural data with third parties without your explicit consent, except where required by law.",
    },
    {
      title: "Data Security",
      description:
        "We use industry-standard encryption and security protocols to protect your information from unauthorized access, alteration, or disclosure.",
    },
    {
      title: "User Control",
      description:
        "You have the right to access, update, or delete your personal data from our system at any time.",
    },
    {
      title: "Cookies",
      description:
        "Our system may use cookies to enhance user experience and improve system performance. You can control cookie settings through your browser.",
    },
    {
      title: "Third-Party Services",
      description:
        "We may integrate third-party services for analysis or communication purposes. These services follow their own privacy practices.",
    },
    {
      title: "Data Retention",
      description:
        "We retain user data only as long as necessary to provide our services or as required by law.",
    },
    {
      title: "Children’s Privacy",
      description:
        "Our system is not intended for users under the age of 13. We do not knowingly collect personal data from children.",
    },
    {
      title: "Policy Updates",
      description:
        "We may update this Privacy Policy periodically. All changes will be communicated through our platform or via email.",
    },
  ];
  const termsAndServices = [
    {
      title: "User Registration",
      description:
        "Users must provide accurate information during registration and are responsible for maintaining the confidentiality of their login credentials.",
    },
    {
      title: "Service Scope",
      description:
        "Our platform offers tools for field analysis, cost calculation, stock management, harvest tracking, and product shipment organization.",
    },
    {
      title: "Acceptable Use",
      description:
        "Users must not misuse the system for unlawful purposes, transmit harmful content, or disrupt platform functionality.",
    },
    {
      title: "Data Responsibility",
      description:
        "Users are responsible for the accuracy of the agricultural data they input into the system.",
    },
    {
      title: "Intellectual Property",
      description:
        "All software, designs, and content on the platform are the intellectual property of Wingardium and may not be copied or reused without permission.",
    },
    {
      title: "Service Availability",
      description:
        "We strive to ensure uninterrupted service but cannot guarantee that the system will always be available or error-free.",
    },
    {
      title: "Termination of Access",
      description:
        "We reserve the right to suspend or terminate user accounts that violate these terms or engage in abusive behavior.",
    },
    {
      title: "Modifications to Services",
      description:
        "We may update or modify features of the platform without prior notice to improve functionality.",
    },
    {
      title: "Limitation of Liability",
      description:
        "We are not liable for any direct or indirect damages resulting from the use or inability to use our services.",
    },
    {
      title: "Governing Law",
      description:
        "These terms shall be governed by the laws of the applicable jurisdiction where our service is legally registered.",
    },
  ];
  return (
    <section className="py-5 my-12 font-fontNunito overflow-hidden">
      <Container clas=" flex flex-col space-y-16 ">
        <AnimatedHeader title="Terms and Services" />
        <div
          className="flex flex-col lg:flex-row max-lg:space-y-8 lg:space-x-12 xl:space-x-24 xs:px-12
         sm:px-20 md:px-28 lg:px-0"
        >
          <TermsLeft privacyPolicy={privacyPolicy} />
          <TermsRight termsAndServices={termsAndServices} />
        </div>
      </Container>
    </section>
  );
}

export default Terms;

// ====================== Terms Left ======================
function TermsLeft({
  privacyPolicy,
}: {
  privacyPolicy: { title: string; description: string }[];
}) {
  return (
    <MotionDiv
      {...animatedHeaderOne}
      transition={{ ...animatedHeaderOne.transition, delay: 0.7 }}
      className="flex flex-col space-y-5 bg-bgColor rounded-xl p-4 lg:p-7 lg:w-full 2xl:max-w-[45%]"
    >
      <div className="flex space-x-5 mb-4 items-center self-center">
        <p className="text-xl rounded-xl bg-primary h-[2px] w-12 xl:w-20"></p>
        <h3 className="text-xl lg:text-2xl font-bold text-primary">
          Privacy Policy
        </h3>
        <p className="text-xl rounded-xl bg-primary h-[2px] w-12 xl:w-20"></p>
      </div>
      {privacyPolicy.map((policy, index) => (
        <div key={index} className="space-y-2">
          <h4 className="text-lg font-bold">- {policy.title}</h4>
          <p>{policy.description}</p>
        </div>
      ))}
    </MotionDiv>
  );
}

// ====================== Terms Right ======================
function TermsRight({
  termsAndServices,
}: {
  termsAndServices: { title: string; description: string }[];
}) {
  return (
    <MotionDiv
      {...animatedHeaderOne}
      transition={{ ...animatedHeaderOne.transition, delay: 1 }}
      className="flex flex-col space-y-5 bg-bgColor rounded-xl p-4 lg:p-7 lg:w-full 2xl:max-w-[45%]"
    >
      <div className="flex space-x-5 mb-4 items-center self-center">
        <p className="text-xl rounded-xl bg-primary h-[2px] w-12 xl:w-20"></p>
        <h3 className="text-xl lg:text-2xl font-bold text-primary">
          Terms And Services
        </h3>
        <p className="text-xl rounded-xl bg-primary h-[2px] w-12 xl:w-20"></p>
      </div>
      {termsAndServices.map((policy, index) => (
        <div key={index} className="space-y-2">
          <h4 className="text-lg font-bold">- {policy.title}</h4>
          <p>{policy.description}</p>
        </div>
      ))}
    </MotionDiv>
  );
}
