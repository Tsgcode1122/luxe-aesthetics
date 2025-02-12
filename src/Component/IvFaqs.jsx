import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors } from "./ColorComponent";
import Heading from "./Heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import bg from "../Images/filler.png";
const IvFaqs = () => {
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
      question: "What is IV hydration therapy?",
      answer:
        "IV hydration therapy delivers fluids, electrolytes, vitamins, and nutrients directly into the bloodstream for fast and effective absorption, helping to replenish hydration, boost energy, and support overall wellness.",
    },
    {
      question: "What are the benefits of IV hydration?",
      answer:
        "IV therapy can help with:\n\n- Dehydration recovery\n- Hangover relief\n- Immune system support\n- Increased energy and mental clarity\n- Skin health and anti-aging benefits\n- Athletic recovery and performance enhancement\n- Migraine and headache relief",
    },
    {
      question: "How long does an IV hydration session take?",
      answer:
        "A typical session lasts between 30-60 minutes, depending on the type of IV infusion.",
    },
    {
      question: "When will I feel the effects?",
      answer:
        "Many clients feel immediate benefits, such as increased energy and hydration, while others may notice gradual improvements over the next 24 hours.",
    },
    {
      question: "How long do the effects last?",
      answer:
        "Effects can last anywhere from a few days to a week, depending on the individual and the type of infusion received.",
    },
    {
      question: "Is IV hydration safe?",
      answer:
        "Yes! IV hydration is administered by trained professionals, and all ingredients are medical-grade and carefully dosed for safety and effectiveness.",
    },
    {
      question: "Does IV hydration therapy hurt?",
      answer:
        "Most clients experience minimal discomfort, similar to a small pinch when the IV is inserted. The process is generally well-tolerated.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Mild side effects may include temporary bruising, swelling, or soreness at the injection site. Rarely, some individuals may experience lightheadedness or nausea.",
    },
    {
      question: "Who is a good candidate for IV hydration?",
      answer:
        "Most adults looking to boost hydration, energy, or overall wellness can benefit. However, individuals with certain medical conditions should consult a healthcare provider before treatment.",
    },
    {
      question: "How often can I get IV hydration therapy?",
      answer:
        "The frequency depends on your hydration and wellness needs. Some clients receive IV therapy weekly, while others opt for treatments as needed for recovery or energy boosts.",
    },
    {
      question: "Can IV hydration help with hangovers?",
      answer:
        "Yes! IV therapy can quickly replenish lost fluids, electrolytes, and vitamins to relieve hangover symptoms such as headaches, nausea, and fatigue.",
    },
    {
      question: "What should I do before my IV therapy session?",
      answer:
        "Drink plenty of water, eat a light meal, and avoid alcohol before your session to ensure the best experience.",
    },
    {
      question: "Can I combine IV hydration with other treatments?",
      answer:
        "Yes! IV hydration can be combined with vitamin injections, aesthetic treatments, and wellness therapies for enhanced benefits.",
    },
    {
      question: "How much does IV hydration therapy cost?",
      answer:
        " Pricing varies based on the type of infusion and any added boosters. A consultation can help determine the best treatment for your needs.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content>
          <Heading> Iv Hydrations Faqs</Heading>
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

export default IvFaqs;

const FaqsContainer = styled.div`
  position: relative;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 1rem;
  background: url(${bg}) no-repeat center/cover;
  background-position: 10% top;
  background-size: 100%;
  overflow: hidden;
  /* padding: 0 20px 0 0; */
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    border-radius: 30px;
    margin: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 40px;
    margin: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 40px;
    margin: 1.5rem;
  }
`;
const Content = styled.div`
  padding: 2rem;
  height: 70vh;
  &::-webkit-scrollbar {
    margin-left: 10px !important;
    width: 8px;

    position: absolute !important;
    border: 1px solid #f0f0f0;
    padding: 1.1px;
    border-radius: 5px;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background: #d5d5d5;

    margin-left: 10px !important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-left: 10px !important;
  }
  overflow-y: auto;
  border-radius: 50px;
  background: rgb(245, 242, 234, 0.9);
  @media screen and (max-width: 320px) {
    border-radius: 30px;
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    border-radius: 40px;
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    border-radius: 40px;
    padding: 1.5rem;
  }
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
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;

    padding: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;
    font-size: 1rem;
  }
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
