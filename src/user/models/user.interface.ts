import { IsBoolean, IsEmail, MaxLength, MinLength } from "class-validator";

export class User {
    id?: number;

    @MinLength(3, {message: "Name is too short. The minimal value is $constraint1"})
    @MaxLength(25, {message: "Name is too long. The max value is $constraint1"})
    fullName?: string;  

    @MinLength(3, {message: "Nick name is too short. The minimal value is $constraint1"})
    @MaxLength(20, {message: "Nick name is too long. The max value is $constraint1"})
    displayName?: string; 

    @IsEmail({}, {message: "The email is not in the correct format"})
    email?: string;

    @MinLength(8, {message: "Password is too short. The minimal value is $constraint1"})
    @MaxLength(25, {message: "Password name is too long. The max value is $constraint1"})
    password?: string; 

    @IsBoolean()
    isActive?: boolean;

    created_at?: string; 

    updated_at?: string;
}