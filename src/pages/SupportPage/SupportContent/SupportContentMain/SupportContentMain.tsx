import { Outlet } from "react-router";

// TODO[Артём]:
// const support = {
//     common: [
//         {
//             id: 0,
//             title: "3123",
//             text: "32413",
//         },
//         {
//             id: 0,
//             title: "3123",
//             text: "32413",
//         },
//     ],
//     auth: [
//         {
//             id: 0,
//             title: "3123",
//             text: "32413",
//         },
//         {
//             id: 0,
//             title: "3123",
//             text: "32413",
//         },
//     ],
// };

export const SupportContentMain = () => {
    return (
        <>
            <Outlet />
        </>
    );
};
