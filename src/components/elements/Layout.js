import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Route from "../route";
import ResponsiveDialog from "./Dialog";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useState, forwardRef, useEffect } from "react";
import { setNotification } from "../../redux/notification/actions";
import { useSelector, useDispatch } from "react-redux";

const defaultModalInfo = { active: false, title: "", message: "" };
const defaultNotifInfo = { active: false, title: "", message: "" };
export default function Layout() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const [notifInfo, setNotifInfo] = useState(defaultNotifInfo);
  const [modalInfo, setModalInfo] = useState(defaultModalInfo);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  useEffect(() => {
    if (notification) listenNotifications(notification);
  }, [notification]);

  const listenNotifications = (n) => {
    dispatch(setNotification(null));
    if (n.type === "confirm") {
      setModalInfo({...n, active: true});
    } else {
      setNotifInfo({...n, active: true});
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setNotifInfo(defaultNotifInfo);
  };
  return (
    <>
      <Header />
      <div className="layout-class">
        <Route />
      </div>
      <Footer />
      <Snackbar
        open={notifInfo.active}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={notifInfo?.alertType || "success"}
          sx={{ width: "100%" }}
        >
          {notifInfo?.message}
        </Alert>
      </Snackbar>
      <ResponsiveDialog
        open={modalInfo.active}
        onClose={() => setModalInfo(defaultModalInfo)}
        {...modalInfo}
      />
    </>
  );
}
