import { createElement } from "react";
import { useParams, useNavigate } from "react-router-dom";

const GeneratePage = (pageName: string | string[], folder: string) => {
  const navigate = useNavigate();

  // Try to load the component, with fallback logic
  const tryLoadComponent = (path: string) => {
    try {
      return require(`./${folder}/${path}`).default;
    } catch (e) {
      return null;
    }
  };

  // Try multiple paths in order of preference
  const possiblePaths = Array.isArray(pageName) ? pageName : [pageName];

  for (const path of possiblePaths) {
    const component = tryLoadComponent(path);
    if (component) {
      try {
        return createElement(component);
      } catch (e) {
        console.log(`Error rendering component at ${path}:`, e);
      }
    }
  }

  // If no component found, navigate to home
  console.log(`No component found for paths: ${possiblePaths.join(", ")}`);
  navigate("/");
  return null;
};

const PageRender = () => {
  const { page, id, step } = useParams();

  const escape2 = [
    "analytics",
    "schedules",
    "history",
    "departments",
    "levels",
    "principal-officer",
    "about-us",
    "our-services",
    "our-blogs",
    "contact-us",
    "enroll-now",
    "dashboard",
    "profile",
    "appointments",
    "lab-test",
    "prescriptions",
    "medications",
    "payment",
    "settings",
    "patients",
    "schedule",
    "medical-records",
    "reports",
    "billing",
  ];

  const patientPages = [
    "dashboard",
    "profile",
    "appointments",
    "order-medications",
    "make-payment",
    "payment-methods",
    "wallet-payment",
    "credit-card-payment",
    "bank-transfer-payment",
    "add-money",
    "add-card",
    "e-prescriptions",
    "new-prescription",
    "your-prescriptions",
    "lab-test",
  ];

  const doctorPages = [
    "dashboard",
    "profile",
    "appointments",
    "patients",
    "schedule",
    "medical-records",
    "prescriptions",
    "reports",
    "billing",
    "settings",
  ];

  let possiblePaths: string[] = [];

  // Handle patient routes
  if (page === "patient" && id && patientPages.includes(id)) {
    if (step) {
      possiblePaths = [
        `${page}/${id}/[id]`,
        `${page}/${id}/index`,
        `${page}/[id]`,
      ];
    } else {
      const isNumeric = /^\d+$/.test(id);
      const isUUID =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          id
        );

      if (isNumeric || isUUID) {
        possiblePaths = [
          `patient/dashboard/[id]`,
          `patient/[id]`,
          `patient/dashboard/index`,
        ];
      } else {
        possiblePaths = [
          `${page}/${id}/index`,
          `${page}/${id}`,
          `${page}/index`,
        ];
      }
    }
  }
  // Handle doctor routes
  else if (page === "doctor" && id && doctorPages.includes(id)) {
    if (step) {
      possiblePaths = [
        `${page}/${id}/[id]`,
        `${page}/${id}/index`,
        `${page}/[id]`,
      ];
    } else {
      const isNumeric = /^\d+$/.test(id);
      const isUUID =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          id
        );

      if (isNumeric || isUUID) {
        possiblePaths = [
          `doctor/dashboard/[id]`,
          `doctor/[id]`,
          `doctor/dashboard/index`,
        ];
      } else {
        possiblePaths = [
          `${page}/${id}/index`,
          `${page}/${id}`,
          `${page}/index`,
        ];
      }
    }
  }
  // Handle other routes
  else if (step) {
    possiblePaths = [`${page}/${id}/[id]`, `${page}/[id]`];
  } else if (id) {
    if (
      (page === "payroll" && escape2.includes(id)) ||
      (page === "about" && escape2?.includes(id))
    ) {
      possiblePaths = [`${page}/${id}`, `${page}/index`];
    } else {
      possiblePaths = [`${page}/[id]`, `${page}/index`];
    }
  } else {
    possiblePaths = [`${page}/index`, `${page}`];
  }

  return GeneratePage(possiblePaths, "screens");
};

export default PageRender;

// import { createElement } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const GeneratePage = (pageName: string, folder: string) => {
//   const component = () => require(`./${folder}/${pageName}`).default;
//   let navigate = useNavigate();
//   try {
//     return createElement(component());
//   } catch (e) {
//     console.log(e);
//     navigate("/");
//   }
// };

// const PageRender = () => {
//   const { page, id, step } = useParams();
//   const escape2 = [
//     "analytics",
//     "schedules",
//     "history",
//     "departments",
//     "levels",
//     "principal-officer",
//     "about-us",
//     "our-services",
//     "our-blogs",
//     "contact-us",
//     "enroll-now",
//     "dashboard",
//   ];

//   let pageName = "";
//   if (step) {
//     pageName = `${page}/${id}/${"[id]"}`;
//   } else if (id) {
//     if (
//       (page === "payroll" && escape2.includes(id)) ||
//       (page === "about" && escape2?.includes(id))
//     ) {
//       pageName = `${page}/${id}`;
//     } else {
//       pageName = `${page}/${"[id]"}`;
//     }
//   } else {
//     pageName = `${page}`;
//   }

//   return GeneratePage(pageName, "screens");
// };

// export default PageRender;
