import React from "react";
import Navbar from "../Components/Navbar";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CountryCode from "../Components/CountryCode";

export default function Register() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="row mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-0">
        <h1 className="text-lg font-semibold my-3">
          Register for Prime Supplies.com
        </h1>
      </div>
      <div className="row mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-0 gap-1">
         <div className="col-md-12 col-xl-8 col-lg-8 col-sm-12 border p-3">
          <h1 className="text-lg font-semibold">Registration Information</h1>
          <Divider className="border-black my-3" />
          <h3 className="text-sm ">
            Register for Prime Supplies.com as a Business or Personal user. Existing
            business account users can simplify registration by entering a
            Grainger account number.
          </h3>
          <FormControl fullWidth className="my-3 " size="small">
            <InputLabel id="demo-simple-select-label">
              Registeration Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={10}
              value={age}
              label="Registeration Type"
              onChange={handleChange}
            >
              <MenuItem value={0}>Select Registeration Type</MenuItem>
              <MenuItem value={10}>
                Register and join an existing bussines account{" "}
              </MenuItem>
              <MenuItem value={20}>
                Register and Create a new bussines account{" "}
              </MenuItem>
              <MenuItem value={30}>Register as a personal user </MenuItem>
            </Select>
          </FormControl>
          <h1 className="text-lg mb-3 font-semibold  ">Contact Information</h1>
          <FormControl fullWidth className="space-y-4">
            <TextField
              id="outlined-First-Name-input"
              label="First Name "
              type="text"
              size="small"
              className="w-full"
            />
            <TextField
              id="outlined-email-input"
              label="Last Name "
              type="text"
              size="small"
              className="w-full"
            />
            <TextField
              id="outlined-email-input"
              label="Email Address  "
              type="email"
              size="small"
              className="w-full"
            />
            <TextField
              id="outlined-email-input"
              label="Confirm Email Address"
              type="email"
              size="small"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Email me product recommendation, custom benifits,and industry information"
            />
            <div className="row flex gap-x-2">
              <div className="col-5">
                <TextField
                  id="outlined-email-input"
                  label="Phone Number "
                  type="number"
                  size="small"
                  className="flex w-100"
                />
              </div>
              <div className="col-5">
                <TextField
                  id="outlined-email-input"
                  label="Phone Number "
                  type="number"
                  size="small"
                  className="flex w-100 "
                />
              </div>
            </div>
            <Button className="bg-black text-white text-xs w-24 font-semibold p-2">
              Continue
            </Button>
          </FormControl>
          <div></div>
        </div>
       
        {/* <div className="col-md-12 col-xl-8 col-lg-8 col-sm-12 border p-3">
          <div className="flex align-items-center ">
            {" "}
            <CheckCircleIcon style={{ color: "green" }} />
            <h1 className="text-lg font-semibold ml-3">
              Registration Information
            </h1>
          </div>
          <Divider className="border-black my-3" />
          <div className="flex  my-1 ">
            <span className="text-black font-semibold mr-2">Type :</span>
            <span>Personal Account</span>
          </div>
          <div className="flex  my-1 ">
            <span className="text-black  font-semibold mr-2">
              Contact Name :
            </span>
            <span>rfgv gfvb</span>
          </div>
          <div className="flex  my-1 ">
            <span className="text-black  font-semibold mr-2">
              Email Address:
            </span>
            <span>gfvb@gmail.com</span>
          </div>
          <div className="flex  my-1 ">
            <span className="text-black   font-semibold mr-2">
              Phone Number:
            </span>
            <span>132black 54654 mr-2</span>
          </div>
        </div> */}
        <div className="col-3 md:hidden sm:hidden lg:block hidden">
          <img
            alt="Office"
            src=" https://www.grainger.com/experience/registration/gcom-registration-ui/_next/image?url=%2Frightrail.png&w=384&q=100"
            className="absolute object-cover max-h-[65vh]"
          />
        </div>
      </div>

      <div className="row mx-auto max-w-4xl px-2 sm:px-6 lg:px-8 py-0 gap-1">
        {/* <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border text-gray-500 text-xl p-4 my-4">
            Address Information 
        </div> */}
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border text-gray-500 text-xl p-4 my-4">
          <h1 className="text-lg mb-3 font-semibold text-black">
            Address Information
          </h1>
          <Divider className="border-black my-3" />
          <h3 className="text-sm font-semibold mb-3">Country USA</h3>
          <FormControl fullWidth className="space-y-4">
            <TextField
              id="outlined-First-Name-input"
              label="Street Address"
              type="text"
              size="small"
              className="w-full"
            />
            <TextField
              id="outlined-email-input"
              label="Suite, Building, Department, etc.Optional "
              type="text"
              size="small"
              className="w-full"
            />
            <TextField
              id="outlined-email-input"
              label="Zip Code "
              type="text"
              size="small"
              className="w-56"
            />
            <TextField
              id="outlined-email-input"
              label="City"
              type="text"
              size="small"
              className="w-full"
            />

            <TextField
              id="outlined-email-input"
              label="State"
              type="text"
              size="small"
              className="flex w-100"
            />
            <Button className="bg-black text-white text-xs w-24 font-semibold p-2">
              Continue
            </Button>
          </FormControl>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 border text-gray-500 text-xl p-4 my-1">
          Account Security
        </div>
      </div>
    </div>
  );
}
