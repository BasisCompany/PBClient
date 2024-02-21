import { Suspense } from "react";
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

//TODO: Loading
export const SupportContentMain = () => {
    return (
        <Suspense fallback={<h1>Loading ... </h1>}>
            <Outlet />
        </Suspense>
    );
};
