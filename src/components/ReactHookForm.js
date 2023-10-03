import { useForm } from "react-hook-form";
import { Box, Checkbox, Stack, FormControl, FormHelperText, RadioGroup, FormControlLabel, Radio, InputLabel, Select, MenuItem, Button, Typography, FormLabel } from "@mui/material";
import {StyledTextField} from "../assets/styledComponents/StyledAllComponents";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,    
    reset,
    formState: { errors },
    getValues, 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Complete Form Data : " + JSON.stringify(data));
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#f8f8ff",
        width: 500,
        borderRadius: 6,
        border: "7px solid orange",
        justifyContent:"center",
        marginBottom:2,
      }}
    >
      
      <form onSubmit={handleSubmit(onSubmit)}>      
      <Stack
          sx={{ display: "flex", backgroundColor: "trablnsparent", borderRadius: 6 }}
          direction="column"
          spacing={1}
          marginLeft={2}
          marginTop={2}
          marginBottom={2}
        >
          <Typography sx={{ textAlign: "center" }}>
            Personal Information
          </Typography>
          <StyledTextField
              label="Full Name"
              name="fullName"
              size="small"                            
              focused               
              {...register("fullName", {                
                required:  true,
                minLength: 4,
              })}
              aria-invalid={errors.fullName ? "true" : "false"}
              error={Boolean(errors.fullName)}              
            />
            {errors.fullName?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.fullName?.type === "minLength" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Min 4 Char*</Typography>
          )}         

<StyledTextField
              label="Phone"
              name="phone"
              size="small"  
              type="number"  
              focused              
              {...register("phone", {
                pattern: "/^d{10}$/",                                                 
                required: true,
                minLength: 10,
                maxLength:10,
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              error={Boolean(errors.phone)}
            />
            {errors.phone?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.phone?.type === "minLength" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Min 10-digits*</Typography>
          )}
          {errors.phone?.type === "maxLength" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Max 10-digits*</Typography>
          )}
         
         <StyledTextField
              label="Email"
              name="email"
              size="small"  
              type="email"  
              focused              
              {...register("email", {
                pattern: "/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/",                                                 
                required: true,                
              })}
              aria-invalid={errors.lastName ? "true" : "false"}
              error={Boolean(errors.email)}
            />
            {errors.email?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.email?.type === "pattern" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Invalid Email*</Typography>
          )}

<StyledTextField
              label="Address"
              name="address"
              size="small"              
              focused              
              {...register("address", {
                required: true,
              minLength:10,
            })}
              aria-invalid={errors.address ? "true" : "false"}
              error={Boolean(errors.address)}
            />
            {errors.address?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.address?.type === "minLength" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Min 10 Char*</Typography>
          )}

<StyledTextField
              label="Password"
              name="password"
              size="small"       
              type="password"       
              focused              
              {...register("password", {
                required: true,  
            })}
              aria-invalid={errors.password ? "true" : "false"}
              error={Boolean(errors.password)}
            />
            {errors.password?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}

<StyledTextField
              label="Confirm Password"
              name="cnfPassword"
              size="small"       
              type="password"       
              focused              
              {...register("cnfPassword", {
                required: true,  
                validate: value => value === getValues("password")
            })}
              aria-invalid={errors.address ? "true" : "false"}
              error={Boolean(errors.cnfPassword)}
            />
            {errors.cnfPassword?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.cnfPassword?.type === "validate" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Password doesn't match*</Typography>
          )}
          
          <StyledTextField
              label="Age"
              name="age"
              size="small"
              type="number"              
              focused              
              {...register("age", {
                required: true,
                min:18,
                max:80,              

              })}
              aria-invalid={errors.age ? "true" : "false"}
              error={Boolean(errors.age)}
            />
            {errors.age?.type === "required" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Required*</Typography>
          )}
          {errors.age?.type === "min" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Min Age 18 Yrs*</Typography>
          )}
          {errors.age?.type === "max" && (
            <Typography variant="caption" color="red" sx={{textAlign:"left"}}>Max Age 80 Yrs*</Typography>
          )}
          

            <FormControl error={Boolean(errors.gender)} sx={{textAlign:"left"}}>
              <FormLabel>Gender</FormLabel>
                <RadioGroup
                  aria-labelledby="gender"
                  name="gender"
                  row
                  size="small"                  
                >
                  <FormControlLabel
                  name="gender"
                    value="female"
                    control={<Radio {...register("gender", {
                      required: "Choose gender"
                    })} />}
                    label="Female"                    
                  />

                  <FormControlLabel
                  name="gender"
                    value="male"
                    control={<Radio {...register("gender", {
                      required: "Choose gender"
                    })} />}
                    label="Male"                    
                  />

                  <FormControlLabel
                    name="gender"
                    value="Transgender"
                    control={<Radio {...register("gender", {
                      required: "Required*"
                    })}/>}
                    label="Transgender"                   
                  />                  
                </RadioGroup>
                <FormHelperText>{errors.gender?.message}</FormHelperText>
         </FormControl>

          <FormControl error={Boolean(errors.maritalStatus)} sx={{textAlign:"left"}}>
                <InputLabel id="marStatusLabel">Marital Status</InputLabel>
                <Select                
                  labelId="marStatusLabel"
                  name="maritalStatus"
                  label="Marital Status"              
                  defaultValue=""   
                                 
                  {...register("maritalStatus", {required: "Required*"})}
                >
                  
                  <MenuItem value={"Married"} {...register("maritalStatus", {required: true})}>Married</MenuItem>
                  <MenuItem value={"Unmarried"} {...register("maritalStatus", {required: true})}>Unmarried</MenuItem>
                </Select>
                <FormHelperText>{errors.maritalStatus?.message} </FormHelperText>
              </FormControl>

          <FormControl error={Boolean(errors.tnc)} sx={{textAlign:"left"}}>
              <FormControlLabel              
              control={<Checkbox {...register("tnc", {required: "Requiredd*"})}/>}
              label="Accept Terms & Conditions"
              name="tnc"
              labelPlacement="end"                 
            />
            <FormHelperText>{errors.tnc?.message}</FormHelperText>
            </FormControl>
           
        <Stack direction="row" spacing={2}>
        <Button type="submit" value="submit" variant="outline" sx={{backgroundColor:"lightblue"}} >Submit</Button>
        <Button value="formFullValues" variant="outline" onClick={()=>console.log("Form Values : " + JSON.stringify(getValues()))} sx={{backgroundColor:"lightgreen"}} >Get Form Values</Button>
        </Stack>
        
        
        </Stack>
      </form>

    </Box>
  );
}
