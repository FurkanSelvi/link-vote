import React, { useCallback, useEffect } from "react";
import Stack from "@mui/material/Stack";
import UpIcon from "@mui/icons-material/ArrowUpward";
import DownIcon from "@mui/icons-material/ArrowDownward";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { addPoint, sumPoint, removeItem } from "../../redux/general/actions";
import { setNotification } from "../../redux/notification/actions";

const ContentItem = ({ title, url, point, id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("deleteOkEvent", onRemoveItem);

    return () => {
      window.removeEventListener("deleteOkEvent", onRemoveItem);
    };
  }, []);

  const onSumPoint = useCallback(() => {
    dispatch(sumPoint(id));
  }, [dispatch, id]);

  const onAddPoint = useCallback(() => {
    dispatch(addPoint(id));
  }, [dispatch, id]);

  const onSure = useCallback(() => {
    dispatch(
      setNotification({
        type: "confirm",
        title: "Remove Link",
        message: `Do you want to remove: ${title}`,
        dispatchKey: "deleteOkEvent",
        dispatchParams: { id, title },
      })
    );
  }, [dispatch]);
  
  const onRemoveItem = (e) => {
    dispatch(removeItem(e.detail.id));
    dispatch(
      setNotification({
        title: "Remove Link",
        message: `${e.detail?.title} removed`,
      })
    );
  };

  return (
    <ListItem>
      <Stack
        style={{ width: "100%", height: "100%" }}
        direction="row"
        spacing={2}
      >
        <Stack
          style={{ border: "2px solid", padding: 7 }}
          direction="column"
          spacing={2}
        >
          <span style={{ fontSize: 25, margin: "auto", fontWeight: "bold" }}>
            {point}
          </span>
          <span style={{ fontWeight: "bold" }}>POINTS</span>
        </Stack>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 600 }}>{title}</span>
              <span style={{ fontSize: 14, color: "gray" }}>({url})</span>
            </div>
            <IconButton onClick={onSure} aria-label="delete" size="small">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 10,
            }}
          >
            <div>
              <IconButton onClick={onAddPoint} aria-label="delete" size="small">
                <UpIcon />
              </IconButton>
              <span style={{ fontSize: 14, color: "gray" }}>Up Vote</span>
            </div>
            <div>
              <IconButton onClick={onSumPoint} aria-label="delete" size="small">
                <DownIcon />
              </IconButton>
              <span style={{ fontSize: 14, color: "gray" }}>Down Vote</span>
            </div>
          </div>
        </div>
      </Stack>
    </ListItem>
  );
};

export default ContentItem;
