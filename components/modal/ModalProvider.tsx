import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import StaffModal from "./StaffModal";
import EmailModal from "./EmailModal";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";

const TeachersModal = dynamic(() => import("./TeachersModal"), {
  ssr: false,
  loading: () => null,
});

export default function ModalProvider() {
  const { modal } = useAppSelector((state) => state.ui);

  const searchParams = useSearchParams();

  console.log(searchParams.get("modal"));

  switch (searchParams.get("modal")) {
    case "teachers":
      return <TeachersModal />;
    case "staff":
      return <StaffModal />;
    case "email":
      return <EmailModal />;
    default:
      return null;
  }
}
