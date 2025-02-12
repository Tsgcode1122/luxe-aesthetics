import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Colors } from "./ColorComponent";
import Heading from "./Heading";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import StarsBackground from "./StarsBackground";
import bg from "../Images/filler.png";
const DermalFillerFaqs = () => {
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
      question: "What are dermal fillers?",
      answer:
        "Dermal fillers are injectable treatments used to restore lost volume, smooth wrinkles, and enhance facial contours. Most fillers are made of hyaluronic acid (HA), a substance naturally found in the body that helps maintain hydration and elasticity.",
    },
    {
      question: "What areas can be treated with fillers?",
      answer:
        "Common treatment areas include:\n\n- Lips (augmentation and hydration)\n- Cheeks (volume restoration and contouring)\n- Nasolabial folds (smile lines)\n- Marionette lines (lines from the mouth to the chin)\n- Jawline and chin (definition and contouring)\n- Under-eye hollows (tear troughs)\n- Hands (volume loss correction)",
    },
    {
      question: "How long does a filler treatment take?",
      answer:
        "A typical filler session lasts 30-60 minutes, depending on the areas being treated.",
    },
    {
      question: "When will I see results?",
      answer:
        "Results are visible immediately, but mild swelling and bruising may temporarily affect the final appearance. The full results settle within 1-2 weeks.",
    },
    {
      question: "How long do fillers last?",
      answer:
        "The longevity of fillers depends on the type of filler used and the treatment area:\n\n- Lip fillers: ~6-12 months\n- Cheek and jawline fillers: ~12-18 months\n- Under-eye fillers: ~12+ months\n- Nasolabial folds and marionette lines: ~9-12 months",
    },
    {
      question: "Does the procedure hurt?",
      answer:
        "Most fillers contain lidocaine to minimize discomfort, and a topical numbing cream can be applied before treatment. Mild discomfort may be felt, but the procedure is generally well-tolerated.",
    },
    {
      question: "Are there any side effects?",
      answer:
        "Common side effects include temporary swelling, bruising, and redness at the injection site. Less common risks include lumps, asymmetry, or rare complications like vascular occlusion.",
    },
    {
      question: "Is there any downtime after filler treatment?",
      answer:
        "Most clients resume normal activities immediately, but mild swelling and bruising can last a few days. It’s recommended to avoid intense workouts, alcohol, and excessive heat for 24-48 hours.",
    },
    {
      question: "Can fillers be dissolved if I don’t like the results?",
      answer:
        "Yes! Hyaluronic acid fillers can be dissolved using an enzyme called hyaluronidase, allowing for adjustments or removal if necessary.",
    },
    {
      question: "Who is a good candidate for dermal fillers?",
      answer:
        "Most adults looking to restore volume, smooth lines, or enhance facial features are good candidates. Pregnant or breastfeeding individuals and those with certain allergies should avoid fillers.",
    },
    {
      question: "How much do fillers cost?",
      answer:
        "Pricing depends on the type of filler used and the amount needed. A consultation is recommended to determine the best approach for your aesthetic goals.",
    },
    {
      question: "How often should I get fillers?",
      answer:
        "Most clients maintain their results with touch-ups every 6-18 months, depending on the treatment area and type of filler used.",
    },
    {
      question: "Can fillers be combined with other treatments?",
      answer:
        "Yes! Fillers pair well with neurotoxins (like Botox), microneedling, and skin treatments for a comprehensive facial rejuvenation.",
    },
    {
      question: "What should I do before and after my treatment?",
      answer:
        "Before treatment: Avoid alcohol, blood thinners, and anti-inflammatory medications for 24-48 hours to minimize bruising.\n\nAfter treatment: Avoid massaging the area, lying flat for several hours, intense exercise, and excessive heat for 24-48 hours.",
    },
  ];

  return (
    <>
      <FaqsContainer>
        <Content>
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

export default DermalFillerFaqs;

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
    background: #535252 !important;

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
