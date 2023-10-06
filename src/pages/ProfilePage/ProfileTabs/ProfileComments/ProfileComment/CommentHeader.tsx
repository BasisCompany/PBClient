// import { FC, useState } from "react";
// import { Box, IconButton, Typography } from "@mui/material";
// import { FlexBox } from "../../../../../UI/FlexBox";
// import { CommentAuthor } from "./CommentAuthor";
// import { Comment } from "../../../../../types/comments.type";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { CommentPopperMenu } from "./CommentPopperMenu";
// import { CommentReportDialog } from "./modals/CommentReportDialog";

// interface CommentHeaderProps {
//     comment: Comment;
// }

// export const CommentHeader: FC<CommentHeaderProps> = ({ comment }) => {
//     const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
//     const [openDialog, setOpenDialog] = useState(false);

//     const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
//         setMenuAnchor(event.currentTarget);
//     };

//     const handleCloseMenu = () => {
//         setMenuAnchor(null);
//     };
//     return (
//         <>
//             <FlexBox sx={{ justifyContent: "space-between" }}>
//                 <CommentAuthor comment={comment} />
//                 <FlexBox sx={{ alignItems: "end" }}>
//                     <IconButton onClick={handleClickMenu}>
//                         <MoreHorizIcon />
//                     </IconButton>
//                 </FlexBox>
//             </FlexBox>
//             <CommentPopperMenu
//                 menuAnchor={menuAnchor}
//                 onMenuClose={handleCloseMenu}
//                 onReportOpen={() => setOpenDialog(true)}
//                 handleDelete={handleDeleteComment}
//             />
//             <CommentReportDialog
//                 open={openDialog}
//                 onClose={() => setOpenDialog(false)}
//             />
//         </>
//     );
// };
