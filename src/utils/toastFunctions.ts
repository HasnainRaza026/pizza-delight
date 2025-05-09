import toast from "react-hot-toast";

export function successToast(msg: string) {
  toast.success(msg, {
    style: {
      border: "2px solid #3d5a2b",
    },
    iconTheme: {
      primary: "#3d5a2b",
      secondary: "#FFFAEE",
    },
  });
}

export function errorToast(msg: string) {
  toast.error(msg, {
    style: {
      border: "2px solid #d62828",
    },
    iconTheme: {
      primary: "#d62828",
      secondary: "#FFFAEE",
    },
  });
}

export function iconToast(msg: string, emoji: string) {
  toast(msg, {
    icon: emoji,
    style: {
      border: "2px solid #d62828",
    },
  });
}
