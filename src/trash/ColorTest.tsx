import { Box, Typography, useTheme } from "@mui/material";
import { FlexBox } from "../UI/FlexBox";

const back = {
    b1: {
        color1: "#0f0f0f",
        color2: "#1a1a1a",
        color3: "#3c3c3c",
    },
    b2: {
        color1: "#272727",
        color2: "#303030",
        color3: "#4a4a4a",
    },
    b3: {
        color1: "#3d3d3d",
        color2: "#444444",
        color3: "#585858",
    },
};

export const ColorTest = () => {
    const theme = useTheme();
    console.log(theme.palette);

    return (
        <Box
            sx={{
                ml: 10,
                width: "700px",
                height: "3000px",
                bgcolor: "test.main",
            }}
        >
            <Title title="Основной контент" />
            <RowColor3
                color1="#0f0f0f"
                color2="#272727"
                color3="#3d3d3d"
                text1="Задний фон"
                text2="Второй фон"
                text3="Третий фон"
            />
            <RowColor3
                color1="#1a1a1a"
                color2="#303030"
                color3="#444444"
                text1="Hover"
                text2="Hover"
                text3="Hover"
            />
            <RowColor3
                color1="#3c3c3c"
                color2="#4a4a4a"
                color3="#585858"
                text1="Active"
                text2="Active"
                text3="Active"
            />
            <MultiColorBox fon1={back.b1} fon2={back.b2} fon3={back.b3} />
            <SuperSuperBox fon1={back.b1} fon2={back.b2} fon3={back.b3} />
            <Title title="Всплывающие окна" />
            <RowColor
                color1="#282828"
                text1="Задний фон"
                color2="#373737"
                text2="Второй фон"
            />
            <RowColor
                color1="#313131"
                text1="Hover"
                color2="#3e3e3e"
                text2="Hover"
            />
            <RowColor
                color1="#4b4b4b"
                text1="Active"
                color2="#545454"
                text2="Active"
            />
        </Box>
    );
};

const MultiColorBox = ({ fon1, fon2, fon3 }: any) => {
    return (
        <FlexBox p={2}>
            <SuperBox fon={fon1} no />
            <SuperBox fon={fon2} />
            <SuperBox fon={fon3} />
        </FlexBox>
    );
};

const SuperBox = ({ fon, no }: any) => {
    return (
        <Box
            sx={{
                ml: no ? 1 : 18,
                width: "100px",
                height: "100px",
                bgcolor: fon.color1,
            }}
        >
            <Box
                sx={{
                    bgcolor: fon.color2,
                    width: "50px",
                    height: "50px",
                }}
            />
            <Box
                sx={{
                    bgcolor: fon.color3,
                    width: "50px",
                    height: "50px",
                }}
            />
        </Box>
    );
};

const Title = ({ title }: { title: string }) => {
    return (
        <Typography variant="h6" sx={{ mt: 2, ml: 2 }}>
            {title}
        </Typography>
    );
};

const RowColor = ({
    color1,
    text1,
    color2,
    text2,
}: {
    color1: string;
    text1: string;
    color2: string;
    text2: string;
}) => {
    return (
        <FlexBox>
            <FlexBox
                sx={{
                    m: 3,
                    alignItems: "center",
                    minWidth: "200px",
                }}
            >
                <Box sx={{ m: "2px" }}>
                    <ColorBox bgcolor={color1} />
                    <Typography>{color1}</Typography>
                </Box>
                <Typography>{text1}</Typography>
            </FlexBox>
            <FlexBox
                sx={{
                    m: 3,
                    alignItems: "center",
                    minWidth: "200px",
                }}
            >
                <Box sx={{ m: "2px" }}>
                    <ColorBox bgcolor={color2} />
                    <Typography>{color2}</Typography>
                </Box>
                <Typography>{text2}</Typography>
            </FlexBox>
        </FlexBox>
    );
};

const SuperSuperBox = ({ fon1, fon2, fon3 }: any) => {
    return (
        <Box
            sx={{
                m: 15,
                width: "300px",
                height: "300px",
                bgcolor: fon1.color1,
                ":hover": {
                    bgcolor: fon1.color2,
                },
                ":active": {
                    bgcolor: fon1.color3,
                },
            }}
        >
            <Box
                sx={{
                    zIndex: 1000,
                    m: 6,
                    ml: 0,
                    width: "300px",
                    height: "200px",
                    bgcolor: fon2.color1,
                    ":hover": {
                        bgcolor: fon2.color2,
                    },
                    ":active": {
                        bgcolor: fon2.color3,
                    },
                }}
            >
                <Box
                    sx={{
                        zIndex: 1200,
                        m: 6,
                        ml: 0,
                        width: "300px",
                        height: "100px",
                        bgcolor: fon3.color1,
                        ":hover": {
                            bgcolor: fon3.color2,
                        },
                        ":active": {
                            bgcolor: fon3.color3,
                        },
                    }}
                ></Box>
            </Box>
        </Box>
    );
};

const RowColor3 = ({
    color1,
    color2,
    color3,
    text1,
    text2,
    text3,
}: {
    color1: string;
    text1: string;
    color2: string;
    color3: string;
    text2: string;
    text3: string;
}) => {
    return (
        <FlexBox>
            <FlexBox
                sx={{
                    m: 3,
                    alignItems: "center",
                    minWidth: "200px",
                }}
            >
                <Box sx={{ m: "2px" }}>
                    <ColorBox bgcolor={color1} />
                    <Typography>{color1}</Typography>
                </Box>
                <Typography>{text1}</Typography>
            </FlexBox>
            <FlexBox
                sx={{
                    m: 3,
                    alignItems: "center",
                    minWidth: "200px",
                }}
            >
                <Box sx={{ m: "2px" }}>
                    <ColorBox bgcolor={color2} />
                    <Typography>{color2}</Typography>
                </Box>
                <Typography>{text2}</Typography>
            </FlexBox>
            <FlexBox
                sx={{
                    m: 3,
                    alignItems: "center",
                    minWidth: "200px",
                }}
            >
                <Box sx={{ m: "2px" }}>
                    <ColorBox bgcolor={color3} />
                    <Typography>{color3}</Typography>
                </Box>
                <Typography>{text3}</Typography>
            </FlexBox>
        </FlexBox>
    );
};

const ColorBox = ({ bgcolor }: { bgcolor: string }) => {
    return <Box sx={{ width: "50px", height: "50px", bgcolor }} />;
};
