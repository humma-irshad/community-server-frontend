import { Box, Divider, Grid, Typography } from "@mui/material";
import {
  FooterBox,
  FooterBoxContentColumn,
  FooterBoxContentRow,
} from "./footer.style";
import { StyledDivider } from "../home/index.style";

export const Footer = () => {
  return (
    <FooterBox>
      <StyledDivider />
      <FooterBoxContentRow>
        <FooterBoxContentColumn>
          <Typography variant="h4">Study Material</Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Notes
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Question Papers
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Other Resources
          </Typography>
        </FooterBoxContentColumn>
        <FooterBoxContentColumn>
          <Typography variant="h4">Contents</Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Videos
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Forum
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Alumni
          </Typography>
        </FooterBoxContentColumn>
        <FooterBoxContentColumn>
          <Typography variant="h4">Links</Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Devs
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            Githiub
          </Typography>
          <Typography
            sx={{
              marginTop: "1.5rem",
            }}
            variant="h6"
          >
            LinkedIn
          </Typography>
        </FooterBoxContentColumn>
      </FooterBoxContentRow>
      <FooterBoxContentColumn>
        <Typography
          sx={{
            marginTop: 5,
            marginRight: 15,
          }}
          variant="body1"
        >
          {`© ${new Date().getFullYear()} `}
          COMMUNITY APP
        </Typography>
      </FooterBoxContentColumn>
    </FooterBox>
  );
};
export default Footer;