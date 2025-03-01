import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors } from "./ColorComponent";
import Heading from "./Heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import bg from "../Images/filler.png";
const NeurotoxinFaqs = () => {
  const [selectedFaq, setSelectedFaq] = useState(null);
  const location = useLocation();
  const isNeurotoxinPage = location.pathname === "/neurotoxins";
  const toggleFaq = (index) => {
    if (selectedFaq === index) {
      setSelectedFaq(null);
    } else {
      setSelectedFaq(index);
    }
  };

  const faqs = [
    {
      question: "What are neurotoxins?",
      answer:
        "Neurotoxins, such as Botox, Dysport, and Xeomin, are injectable treatments that temporarily relax targeted muscles to reduce the appearance of fine lines and wrinkles. They work by blocking nerve signals to the muscles, preventing them from contracting.",
    },
    {
      question: "What areas can be treated with neurotoxins?",
      answer:
        "Commonly treated areas include:\n\n- Forehead lines\n- Frown lines (between the eyebrows)\n- Crow’s feet (around the eyes)\n- Bunny lines (nose wrinkles)\n- Lip flip (upper lip enhancement)\n- Chin dimpling\n- Jawline slimming\n- Neck bands",
    },
    {
      question: "How long does a neurotoxin treatment take?",
      answer:
        "A typical treatment session lasts about 10-20 minutes, depending on the areas being treated.",
    },
    {
      question: "When will I see results?",
      answer:
        "Results typically begin to appear within 3-5 days, with full effects visible in about 10-14 days.",
    },
    {
      question: "How long do results last?",
      answer:
        "Neurotoxin effects generally last 3-4 months, depending on factors such as metabolism, lifestyle, and treatment area.",
    },
    {
      question: "Does the procedure hurt?",
      answer:
        "Most clients experience minimal discomfort. The injections feel like small pinches, and the procedure is quick. A numbing cream can be applied upon request.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Common side effects include mild swelling, redness, or bruising at the injection site. Rare side effects include temporary drooping of the eyelid or eyebrow, headache, or flu-like symptoms.",
    },
    {
      question: "Is there any downtime after treatment?",
      answer:
        "There is little to no downtime. You can resume most activities immediately but should avoid strenuous exercise, excessive heat, or rubbing the treated area for 24 hours.",
    },
    {
      question: "Can neurotoxins prevent wrinkles?",
      answer:
        "Yes! Regular treatments can help prevent the formation of deeper lines and wrinkles by limiting repetitive muscle movements.",
    },
    {
      question: "Who is a good candidate for neurotoxin treatment?",
      answer:
        "Most adults looking to reduce or prevent fine lines and wrinkles are good candidates. However, pregnant or breastfeeding individuals and those with certain neurological conditions should avoid neurotoxin treatments.",
    },
    {
      question: "How much does treatment cost?",
      answer:
        "Pricing varies based on the type of neurotoxin used and the number of units needed. A consultation is recommended to determine the appropriate dosage for your goals.",
    },
    {
      question: "How often should I get neurotoxin treatments?",
      answer:
        "Most clients schedule treatments every 3-4 months to maintain results.",
    },
    {
      question: "Can I combine neurotoxins with other treatments?",
      answer:
        "Yes! Neurotoxins pair well with dermal fillers, microneedling, and other aesthetic treatments to enhance overall facial rejuvenation.",
    },
    {
      question: "What should I do before and after my treatment?",
      answer:
        "Before treatment: Avoid alcohol, blood thinners, and anti-inflammatory medications for 24-48 hours to minimize bruising. After treatment: Avoid lying down, rubbing the area, strenuous exercise, and excessive heat for 24 hours.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content isNeurotoxinPage={isNeurotoxinPage}>
          <Heading> Neurotoxin Faqs</Heading>
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

export default NeurotoxinFaqs;

const FaqsContainer = styled.div`
  position: relative;

  /* background: url(${bg}) no-repeat center/cover; */
  background-position: 10% top;
  background-size: 100%;
  overflow: hidden;
  /* padding: 0 20px 0 0; */
  /* border-radius: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  height: ${(props) => (props.isNeurotoxinPage ? "auto" : "70vh")};
  padding: 2rem;

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
    background: #535252 !important;

    margin-left: 10px !important;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    margin-left: 10px !important;
  }
  overflow-y: auto;
  /* border-radius: 50px; */
  background: rgb(245, 242, 234, 0.9);
  @media screen and (max-width: 320px) {
    padding: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
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
  border: 0.3px solid gold;
  background: ${Colors.back};
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
