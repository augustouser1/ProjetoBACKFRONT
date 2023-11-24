import { Routes, Route } from "react-router-dom"
import { PageHome, PageList, PageLayout, PageAdm } from "../pages"
import ProtectedRoute from "./ProtectedRoute"
export const RouteSoftware = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="list" element={<PageList />} />
        <Route element={<ProtectedRoute/>}></Route>
        <Route path="/adm" element={<PageAdm/>}></Route>
        </Route>
    </Routes>
  );
};

export default RouteSoftware;