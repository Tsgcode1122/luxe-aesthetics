import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors } from "./ColorComponent";
import Heading from "./Heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import bg from "../Images/filler.png";
const Faqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);

  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "What is GLP-1 Semaglutide?",
      answer:
        "GLP-1 Semaglutide is a treatment that regulates appetite and blood sugar, promoting weight loss with a healthy diet and exercise.",
    },
    {
      question: "How does GIP/GLP-1 Tirzepatide work?",
      answer:
        "GIP/GLP-1 Tirzepatide is a medication that helps regulate appetite and blood sugar levels to support weight loss.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Results can vary, but many patients start noticing improvements within a few weeks, especially when combined with a healthy lifestyle.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Some common side effects include nausea and diarrhea, which typically decrease over time. Always consult with your healthcare provider for a complete list of potential side effects.",
    },
    {
      question: "How do I get started with the treatment?",
      answer:
        "To get started, schedule a consultation with us to discuss your health goals and determine the best treatment plan for you.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content>
          <Heading>Faqs</Heading>
          <SubHead>Frequently Asked Questions</SubHead>
          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <Question onClick={() => toggleFaq(index)}>
                {faq.question}
                <IconWrapper>
                  {selectedFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </IconWrapper>
              </Question>
              <Answer
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: selectedFaq === index ? "auto" : 0,
                  opacity: selectedFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </Answer>
            </FaqItem>
          ))}
        </Content>
      </FaqsContainer>
    </>
  );
};

export default Faqs;

const FaqsContainer = styled.div`
  position: relative;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 2rem;
  background: url(${bg}) no-repeat center/cover;
  background-position: 10% top;
  background-size: 100%;
  /* background: ${Colors.offWhite}; */
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  padding: 2rem;
  border-radius: 50px;
  background: rgb(245, 242, 234, 0.9);
`;
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;

const FaqItem = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.div`
  padding: 1rem;
  background: linear-gradient(
    -1deg,
    #0b090a 0%,
    #f0e8d7 10%,
    #f4ebd0 20%,
    #f4ebd0 50%,
    #f0e8d7 70%,
    #f4ebd0 90%,
    #0b090a 100%
  );
  color: black;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled(motion.div)`
  overflow: hidden;
  padding: 0 1rem;
  background: #f5f2ea;
  border-radius: 4px;
  color: ${Colors.coolBlack};
  p {
    margin: 0;
    padding: 1rem 0;
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;
