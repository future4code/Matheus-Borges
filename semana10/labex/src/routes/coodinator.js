export const goToTripListPage = (history) => {
    history.push("/list-trips");
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  export const goToLoginPage = (history) => {
    history.push("/login");
  };
  export const goToApplicationPage = (history) => {
    history.push("/application-form");
  };
  export const goToAdminHomePage = (history, id) => {
    history.push("/admin-home");
  };
  export const goToCreateTripPage = (history) => {
    history.push("/create-trip");
  };
  
    export const goToLastPage = (history) => {
      history.goBack();
    };
    

  //   export const goToAboutPageEN = (history) => {
  //     history.push("/sobre-este-site/ingles");
  //   };
    
  //   export const goToContactsPage = (history) => {
  //     history.push("/contatos");
  //   };
  