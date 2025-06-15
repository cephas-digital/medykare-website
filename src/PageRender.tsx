"use client";

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
    "nearby-laboratories",
    "lab-results",
    "settings",
    "my-profile",
    "health-records",
    "privacy-settings",
    "help-support",
    "live-chat",
    "notifications",
    "notification-detail",
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
    "earnings",
    "notifications",
  ];

  // Special handling for earnings sub-routes
  const earningsSubRoutes = [
    "add-money",
    "add-card",
    "withdraw",
    "add-account",
  ];

  // Special handling for prescription sub-routes
  const prescriptionSubRoutes = ["new"];

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
  // Handle doctor routes with special handling for sub-routes
  else if (page === "doctor" && id && doctorPages.includes(id)) {
    if (step) {
      // Special handling for earnings sub-routes
      if (id === "earnings" && earningsSubRoutes.includes(step)) {
        if (step === "add-money") {
          // For add-money, prioritize [id].tsx first, then direct file
          possiblePaths = [
            `${page}/${id}/[id]`, // Try dynamic route first for add-money
            `${page}/${id}/${step}`, // Then try direct file
            `${page}/${id}/index`,
          ];
        } else {
          // For other earnings routes like add-card, prioritize direct files
          possiblePaths = [
            `${page}/${id}/${step}`, // Try direct file first
            `${page}/${id}/[id]`, // Then try dynamic route
            `${page}/${id}/index`,
          ];
        }
      }
      // Special handling for prescription sub-routes
      else if (id === "prescriptions" && prescriptionSubRoutes.includes(step)) {
        possiblePaths = [
          `${page}/${id}/${step}`, // Try direct file first (e.g., doctor/prescriptions/new)
          `${page}/${id}/[id]`, // Then try dynamic route (e.g., doctor/prescriptions/[id])
          `${page}/${id}/index`,
        ];
      }
      // Special handling for appointments with patient IDs
      else if (id === "appointments") {
        possiblePaths = [
          `${page}/${id}/[id]`, // Try dynamic route for appointment details
          `${page}/${id}/${step}`, // Then try direct file
          `${page}/${id}/index`,
        ];
      }
      // Special handling for patients with patient IDs
      else if (id === "patients") {
        possiblePaths = [
          `${page}/${id}/[id]`, // Try dynamic route for patient details
          `${page}/${id}/${step}`, // Then try direct file
          `${page}/${id}/index`,
        ];
      }
      // Default handling for other doctor sub-routes
      else {
        possiblePaths = [
          `${page}/${id}/[id]`,
          `${page}/${id}/index`,
          `${page}/[id]`,
        ];
      }
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

// const GeneratePage = (pageName: string | string[], folder: string) => {
//   const navigate = useNavigate();

//   // Try to load the component, with fallback logic
//   const tryLoadComponent = (path: string) => {
//     try {
//       return require(`./${folder}/${path}`).default;
//     } catch (e) {
//       return null;
//     }
//   };

//   // Try multiple paths in order of preference
//   const possiblePaths = Array.isArray(pageName) ? pageName : [pageName];

//   for (const path of possiblePaths) {
//     const component = tryLoadComponent(path);
//     if (component) {
//       try {
//         return createElement(component);
//       } catch (e) {
//         console.log(`Error rendering component at ${path}:`, e);
//       }
//     }
//   }

//   // If no component found, navigate to home
//   console.log(`No component found for paths: ${possiblePaths.join(", ")}`);
//   navigate("/");
//   return null;
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
//     "profile",
//     "appointments",
//     "lab-test",
//     "prescriptions",
//     "medications",
//     "payment",
//     "settings",
//     "patients",
//     "schedule",
//     "medical-records",
//     "reports",
//     "billing",
//   ];

//   const patientPages = [
//     "dashboard",
//     "profile",
//     "appointments",
//     "order-medications",
//     "make-payment",
//     "payment-methods",
//     "wallet-payment",
//     "credit-card-payment",
//     "bank-transfer-payment",
//     "add-money",
//     "add-card",
//     "e-prescriptions",
//     "new-prescription",
//     "your-prescriptions",
//     "lab-test",
//     "nearby-laboratories",
//     "lab-results",
//     "settings",
//     "my-profile",
//     "health-records",
//     "privacy-settings",
//     "help-support",
//     "live-chat",
//     "notifications",
//     "notification-detail",
//   ];

//   const doctorPages = [
//     "dashboard",
//     "profile",
//     "appointments",
//     "patients",
//     "schedule",
//     "medical-records",
//     "prescriptions",
//     "reports",
//     "billing",
//     "settings",
//     "earnings",
//     "add-money",
//     "add-card",
//     "notifications",
//     "prescriptions",
//     "new",
//   ];

//   // Special handling for earnings sub-routes
//   const earningsSubRoutes = [
//     "add-money",
//     "add-card",
//     "withdraw",
//     "add-account",
//   ];

//   let possiblePaths: string[] = [];

//   // Handle patient routes
//   if (page === "patient" && id && patientPages.includes(id)) {
//     if (step) {
//       possiblePaths = [
//         `${page}/${id}/[id]`,
//         `${page}/${id}/index`,
//         `${page}/[id]`,
//       ];
//     } else {
//       const isNumeric = /^\d+$/.test(id);
//       const isUUID =
//         /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
//           id
//         );

//       if (isNumeric || isUUID) {
//         possiblePaths = [
//           `patient/dashboard/[id]`,
//           `patient/[id]`,
//           `patient/dashboard/index`,
//         ];
//       } else {
//         possiblePaths = [
//           `${page}/${id}/index`,
//           `${page}/${id}`,
//           `${page}/index`,
//         ];
//       }
//     }
//   }
//   // Handle doctor routes with special earnings handling
//   else if (page === "doctor" && id && doctorPages.includes(id)) {
//     if (step) {
//       // Special handling for earnings sub-routes
//       if (id === "earnings" && earningsSubRoutes.includes(step)) {
//         possiblePaths = [
//           `${page}/${id}/${step}`, // Try direct file first (e.g., doctor/earnings/add-card)
//           `${page}/${id}/[id]`, // Then try dynamic route (e.g., doctor/earnings/[id])
//           `${page}/${id}/index`,
//         ];
//       } else {
//         possiblePaths = [
//           `${page}/${id}/[id]`,
//           `${page}/${id}/index`,
//           `${page}/[id]`,
//         ];
//       }
//     } else {
//       const isNumeric = /^\d+$/.test(id);
//       const isUUID =
//         /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
//           id
//         );

//       if (isNumeric || isUUID) {
//         possiblePaths = [
//           `doctor/dashboard/[id]`,
//           `doctor/[id]`,
//           `doctor/dashboard/index`,
//         ];
//       } else {
//         possiblePaths = [
//           `${page}/${id}/index`,
//           `${page}/${id}`,
//           `${page}/index`,
//         ];
//       }
//     }
//   }
//   // Handle other routes
//   else if (step) {
//     possiblePaths = [`${page}/${id}/[id]`, `${page}/[id]`];
//   } else if (id) {
//     if (
//       (page === "payroll" && escape2.includes(id)) ||
//       (page === "about" && escape2?.includes(id))
//     ) {
//       possiblePaths = [`${page}/${id}`, `${page}/index`];
//     } else {
//       possiblePaths = [`${page}/[id]`, `${page}/index`];
//     }
//   } else {
//     possiblePaths = [`${page}/index`, `${page}`];
//   }

//   return GeneratePage(possiblePaths, "screens");
// };

// export default PageRender;
