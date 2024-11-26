try {
    // Code that might throw an exception
    const result = riskyFunction();
    console.log(result);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error", error);
    }
  }

  


  class CustomError extends Error {
    constructor(message: string, public code: number) {
      super(message);
      this.name = "CustomError";
    }
  }
  
  try {
    throw new CustomError("Something went wrong", 400);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Custom Error: ${error.message}, Code: ${error.code}`);
    }
  }
  

  function handleError(error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error", error);
    }
  }
  
  try {
    riskyFunction();
  } catch (error) {
    handleError(error);
  }
  