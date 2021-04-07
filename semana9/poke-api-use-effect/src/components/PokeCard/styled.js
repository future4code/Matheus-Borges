import styled from "styled-components";
import { extendTheme } from "@chakra-ui/react"
import { Select } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
      brand: {
        100: "#E9D8FD",
            // ...
        900: "#6B46C1",
      },
    },
  })
  

// export const DivContainer = styled.div`
//     display: flex;
//     align-items:center;
//     flex-direction:column;
//     text-align: center;
//     margin-top: 100px;
//     width: 200px;
// `;
