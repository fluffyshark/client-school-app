import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface UserData {
  _id: string;
  username: string;
  lasforstaelse2: any[];
  lasforstaelse2_points:number;
}

export var userData: UserData = {
  _id: "",
  username: "",
  lasforstaelse2: [],
  lasforstaelse2_points:0
};


const UserSlice = createSlice({
  name: "user",
  initialState: { value: userData },
  reducers: {
    add_user_info: (state, action: PayloadAction<UserData>) => {
      state.value = action.payload;
    },
  },
});

export const {
  add_user_info,
 
} = UserSlice.actions;
export default UserSlice.reducer;
