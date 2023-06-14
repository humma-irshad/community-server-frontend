
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

export const Footer = () => {
    return (
        <Box
            sx={{
                marginTop: "5rem",
                height: "15rem",
                marginBottom: "7rem",
            }}
        >
            <Divider />
            <Box
                sx={{
                    marginTop: "2.5rem",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Typography sx={{
                    marginLeft: "15rem",
                    color: "textSecondary"
                }} variant="h6">
                    {`© ${new Date().getFullYear()} `}
                    COMMUNITY APP
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "7rem",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4">
                        Study Material
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Notes
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Question Papers
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Other Resources
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "7rem",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4">
                        Contents
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Videos
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Forum
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Alumni
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginLeft: "7rem",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4">
                        Links
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Devs
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        Githiub
                    </Typography>
                    <Typography sx={{
                        marginTop: "2.5rem",
                    }}
                        variant="h6">
                        LinkedIn
                    </Typography>
                </Box>



            </Box>

        </Box>
    );
};

export default Footer;