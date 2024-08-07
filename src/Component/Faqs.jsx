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
      question: "What is Semaglutide?",
      answer:
        "Semaglutide is a medication that mimics a hormone called GLP-1 (glucagon-like peptide-1) which helps to regulate blood sugar levels and appetite. It is commonly used to treat type 2 diabetes and is also effective for weight management.",
    },
    {
      question: "How does Semaglutide work?",
      answer:
        "Semaglutide works by stimulating insulin production, reducing glucose production in the liver, and  slowing down gastric emptying. This leads to reduced appetite, lower blood sugar levels, and  weight loss.",
    },
    {
      question: "Who can use Semaglutide?",
      answer:
        "Semaglutide is prescribed for adults with type 2 diabetes or those who are overweight or obese and  need help with weight management. A healthcare provider will determine if Semaglutide is  appropriate based on individual health conditions and history.",
    },
    {
      question: "How is Semaglutide administered?",
      answer:
        "Semaglutide is typically administered once a week via subcutaneous injection (under the skin). It is  important to follow the dosage instructions provided by your healthcare provider.",
    },
    {
      question: "What are the benefits of Semaglutide?",
      answer:
        "• Improved blood sugar control • Significant weight loss • Reduced appetite • Lower risk of cardiovascular events in people with type 2 diabetes",
    },
    {
      question: "What are the potential side effects?",
      answer:
        "Common side effects of Semaglutide include: • Nausea • Vomiting • Diarrhea • Constipation • Abdominal pain In rare cases, serious side effects may occur. It is important to contact your healthcare provider if  you experience severe side effects or allergic reactions.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Individual results may vary, but many people start to see weight loss and improved blood sugar  levels within the first few weeks of treatment. Full effects may take several months",
    },
    {
      question: "Can I take Semaglutide with other medications?",
      answer:
        "It is important to inform your healthcare provider of all medications and supplements you are  taking, as Semaglutide may interact with certain drugs. Your healthcare provider will advise you on  the appropriate use.",
    },
    {
      question:
        "Is there any special diet I should follow while taking Semaglutide?",
      answer:
        "While there is no specific diet required, adopting a healthy, balanced diet and regular exercise  routine can enhance the benefits of Semaglutide. Your healthcare provider may provide  personalized dietary recommendations.",
    },
    {
      question: "How long do I need to take Semaglutide?",
      answer:
        "The duration of treatment with Semaglutide will depend on your individual health goals and  response to the medication. Your healthcare provider will monitor your progress and adjust your  treatment plan as needed.",
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "If you miss a dose, take it as soon as you remember, unless it is close to the time for your next dose.  Do not take two doses at the same time to make up for a missed dose. Follow your healthcare  provider's instructions.",
    },
    {
      question: "How do I store Semaglutide?",
      answer:
        "Semaglutide should be stored in the refrigerator until the expiration date. Once opened, it can be  kept at room temperature for up to 4 weeks. Do not freeze Semaglutide.",
    },
    {
      question: "Who should not use Semaglutide?",
      answer:
        "Semaglutide is not recommended for people with a history of medullary thyroid carcinoma or  multiple endocrine neoplasia syndrome type 2. Pregnant or breastfeeding women should also avoid  using Semaglutide unless advised by their healthcare provider.",
    },
    {
      question: "Can I drink alcohol while taking Semaglutide?",
      answer:
        "It is advisable to limit alcohol consumption while taking Semaglutide, as alcohol can affect blood  sugar levels and potentially increase the risk of side effects.",
    },
    {
      question:
        "How can I get started with Semaglutide at Gem Luxe Aesthetics?",
      answer:
        "To begin your Semaglutide treatment, schedule a consultation with our healthcare provider at Gem  Luxe Aesthetics. We will assess your health and discuss your weight loss goals to create a  personalized treatment plan.",
    },
    {
      question:
        "For any additional questions or concerns, please feel free to contact us at (484) 995-2726.",
      answer: "",
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
