export type RegUserProps = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
};
export const registerUserApi = async (payload: RegUserProps) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_SITE}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Return the parsed JSON response
  } catch (error) {
    console.error("Registration failed:", error);
    throw new Error("Registration failed. Please try again.");
  }
};
