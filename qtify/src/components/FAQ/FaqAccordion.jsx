import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as DownIcon } from "../../assets/down-chevron.svg";
import { ReactComponent as UpIcon } from "../../assets/up-chevron.svg";
import { useEffect } from "react";
import axios from "axios";
import styles from "./FaqAccordion.module.css";

const FaqAccordion = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const data = await axios.get("https://qtify-backend-labs.crio.do/faq");
        setFaq(data.data.data);
      } catch (err) {
        console.error("Cannot fetch FAQ's at the moment");
      }
    };

    fetchFaq();
  }, []);

  return (
    <div className={styles.faq_container}>
      <Typography
        sx={{
          fontSize: "50px",
          fontWeight: "600",
          lineHeight: "75px",
          textAlign: "center",
          color: "#FFFFFF",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        FAQs
      </Typography>
      {faq.length > 0 &&
        faq.map((el, idx) => {
          return (
            <Accordion
              defaultExpanded={idx === 0}
              key={idx}
              sx={{
                // backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
                marginBottom: "10px",
                // backgroundColor: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<DownIcon />}
                aria-controls={`panel${idx}-content`}
                id={`panel${idx + Math.random() + 110}-header${el.question}`}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#121212",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "30px",
                  }}
                >
                  {el.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "white",
                  color: "#121212",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "30px",
                  }}
                >
                  {el.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
    </div>
  );
};

export default FaqAccordion;
