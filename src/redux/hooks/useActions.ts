import { useDispatch }        from "react-redux";
import { AppDispatch }        from "../store";
import { bindActionCreators } from "@reduxjs/toolkit";
import { allActions }         from "../reducers/all-actions";




const useAppDispatch = () => useDispatch<AppDispatch>()
export const useActions = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
