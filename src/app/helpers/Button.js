import { FaArrowRight } from "react-icons/fa";
export const Button = ({ btnText }) => {
  return (
    <div>
      <button
        className="flex items-center gap-[0.375rem] justify-between py-3 px-3 w-4/6 bg-background-gradient-button text-[#fff] rounded-2xl text-xs font-medium"
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   gap: "0.375rem",
        //   justifyContent: "space-between",
        //   padding: "0.9375rem 1.25rem",
        //   width: "65%",
        //   background:
        //     "linear-gradient(to top, #ae884aff, #b08a4bff, #b18c4dff, #b28d4eff, #b48f50ff, #b59051ff, #b79252ff, #b89454ff, #ba9555ff, #bb9756ff)",
        //   color: "white",
        //   borderRadius: "1.25rem",
        //   fontSize: "0.9375rem",
        //   fontWeight: "500",
        // }}
        style={{
          background:
            "linear-gradient(to bottom, #B08A4C, #B18C4D, #B28D4E, #B48E4F, #B58F50, #B69151, #B79252, #B89353, #B99454, #BA9656, #BB9756, #C19D5C, #C6A260, #C7A361, #C9A663, #D1AF6B, #D5B36E, #D7B570, #D8B671)",
        }}
      >
        {btnText}{" "}
        <FaArrowRight
          size={16}
          className="fa-solid fa-arrow-right text-[1.25rem]"
        />
      </button>
    </div>
  );
};
