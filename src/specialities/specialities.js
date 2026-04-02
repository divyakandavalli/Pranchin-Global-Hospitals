import image1 from "../assets/images/Services/shot-operating-room-assistant-hands-out-instruments-surgeons-operation-surgeons-perform-operation-professional-medical-doctors-performing-surgery.jpg";
import image2 from "../assets/images/Services/doctor-checking-patient.jpg";
import bannerCardio from "../assets/images/Services/doctor-who-advise-treating-patient-with-heart-disease-2.jpg";
const SPECIALITIES = [
  // Core
  {
    slug: "cardiology",
    title: "Cardiology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: `Our state-of-the-art heart clinics, combined with a highly experienced team of Cardiologists and well trained Nursing and Technicians, place us at the forefront of Cardiac Care. Every treatment plan is tailored to ensure the best clinical outcomes, guiding each patient toward a healthier heart and a better quality of life. The Department of Cardiology at Prachin Global Hospital is equipped with cutting-edge technology and advanced infrastructure to deliver world-class cardiac care.`,

      diagnosticsTitle: "Advanced Diagnostic Tools",
      diagnosticsDescription:
        "We offer comprehensive cardiac diagnostics including:",

      diagnostics: [
        "CT Coronary Angiogram",
        "Cardiac MRI",
        "Radionuclide Studies",
        "2D ECHO, TEE, DSE",
        "Head-Up Tilt Test, Holter Monitoring, and ABPM",
      ],

      proceduresTitle: "Specialized Cath Labs",
      proceduresDescription: `Our Hybrid Cath Lab and Neuro Intervention Cath Lab are equipped with advanced flat-panel imaging technology, IVUS, OCT, NIRS IVUS, and 3D mapping systems for accurate diagnosis and precision-driven treatment.`,

      proceduresSubTitle: "We specialize in:",
      procedures: [
        "Coronary, structural, and peripheral interventions",
        "Advanced electrophysiology diagnosis and treatments",
        "Image-guided complex coronary interventions",
        "Left Main, Bifurcation CTO procedures",
        "Post-bypass interventional angioplasty",
      ],

      proceduresNote:
        "Advanced cardiac support using Impella and ECMO-assisted devices",
      image1: image1,
      image1: image2,
      extraSectionTitle: "Advanced Diagnostic & Preventive Cardiac Care",
      extraSectionContent: `At Prachin Global Hospital, our expert cardiologists diagnose and treat heart and vascular diseases using the latest technologies and evidence-based practices. Our interventional cardiology team focuses on both treatment and prevention, ensuring comprehensive care for every cardiovascular concern.`,

      screeningTitle: "Regular Screening & Heart Health Check-ups",
      screeningContent: `We offer regular heart screening programs and preventive health check-ups to promote early detection and timely intervention. Our preventive and curative cardiology services are designed to protect and enhance long-term heart health.`,

      packages: [
        {
          title: "Heart Health Package",
          description: "Comprehensive cardiac screening.",
        },
        {
          title: "Angiogram Package",
          description: "Imaging to detect blocked arteries.",
        },
      ],

      technologiesTitle: "Technologies & Equipment used",
      technologies: [
        "Minimally invasive cardiac surgeries",
        "Robotic-assisted procedures",
      ],

      technologiesNote:
        "Complex cardiothoracic interventions with minimal complications",
    },
  },
  {
    slug: "neurology",
    title: "Neurology",
    category: "core",

    sections: {
      overview: `Prachin Global Hospital is equipped to treat conditions affecting the Brain, Spinal Cord, Nerves, and muscles with precision and care. Our team of highly experienced Neuro Physicians and Neurosurgeons brings together international standards, vast clinical experience and patient-first ethics to deliver world-class neurological care.`,

      diagnosticsTitle: "Advanced Neurology & Neurosurgery Care",
      diagnosticsDescription: `We offer a comprehensive range of non-invasive, minimally invasive, and surgical treatments tailored to each patient’s condition. Our advanced infrastructure includes:`,

      diagnostics: [
        "HEPA-filtered modular operation theatres",
        "Advanced Neuro ICUs with 24/7 monitoring",
        "High-end diagnostic and imaging facilities",
        "Dedicated neurophysiology and rehabilitation units",
      ],
      diagnosticsDescription2:
        "Both outpatient and inpatient services are designed to ensure accurate diagnosis, effective treatment, and smooth recovery.",
      proceduresTitle: "Comprehensive Neurological Diagnostics",
      proceduresDescription: `Our Department of Neurophysiology provides advanced diagnostic testing essential for evaluating nervous system disorders. These tests help in early detection, accurate diagnosis, and effective treatment planning.`,

      proceduresSubTitle: "Diagnostic Tests Include:",
      procedures: [
        "Electromyography (EMG)",
        "Nerve Conduction Studies (NCS)",
        "Electroencephalogram (EEG)",
        "CT Scan",
        "MRI Scan",
        "Neuro Lab",
      ],

      proceduresNote:
        "These diagnostic tools help in early detection and effective treatment planning.",

      extraSectionTitle: "Key Neurological Conditions Treated",
      extraSectionContent: `At Prachin Global Hospital, our expert neurological team manages a wide spectrum of neurological disorders including stroke, dementia, epilepsy, Parkinsonism, ALS, multiple sclerosis, Alzheimer’s disease, Tourette’s syndrome, neuromuscular disorders, and congenital spine disorders.`,

      screeningTitle: "Detailed Overview of Major Conditions",
      screeningContent: `We provide specialized care for major neurological conditions with advanced treatment protocols and patient-focused management.`,

      packages: [
        {
          title: "Stroke",
          description:
            "A medical emergency caused by disrupted blood flow to the brain. Early treatment can prevent disability.",
        },
        {
          title: "Dementia",
          description:
            "Disorders affecting memory and cognition including Alzheimer’s and vascular dementia.",
        },
        {
          title: "Epilepsy",
          description:
            "Neurological condition with recurrent seizures managed through long-term care.",
        },
        {
          title: "Parkinsonism",
          description:
            "Movement disorder causing tremors and stiffness, treated for better quality of life.",
        },
        {
          title: "ALS",
          description:
            "Progressive disease affecting muscle control with multidisciplinary care support.",
        },
        {
          title: "Multiple Sclerosis",
          description:
            "Autoimmune condition affecting nerves causing weakness and coordination issues.",
        },
        {
          title: "Alzheimer’s Disease",
          description:
            "Neurodegenerative disorder affecting memory and cognitive function.",
        },
        {
          title: "Tourette’s Syndrome",
          description:
            "Condition with involuntary movements and vocal tics, often starting in childhood.",
        },
      ],

      technologiesTitle: "Why Choose Prachin Global Hospital",
      technologies: [
        "Advanced Neuro ICUs",
        "Experienced Neurology Specialists",
        "Comprehensive Diagnostic Facilities",
        "Personalized Treatment Plans",
      ],

      technologiesNote:
        "We combine medical excellence with compassion to ensure the best neurological outcomes for every patient.",
    },
  },
  {
    slug: "neuro-surgery",
    title: "Neuro Surgery",
    category: "core",
    sections: {
      overview:
        "Neuro surgery focuses on surgical treatment of brain and spine.",
      diagnostics: ["Brain Scan", "Spine MRI"],
      treatments: ["Brain Surgery", "Spine Surgery"],
      technologies: ["Advanced Neuro Navigation"],
    },
  },
  {
    slug: "oncology",
    title: "Oncology",
    category: "core",
    sections: {
      overview: "Oncology focuses on cancer diagnosis and treatment.",
      diagnostics: ["Biopsy", "PET Scan"],
      treatments: ["Chemotherapy", "Radiation Therapy"],
      technologies: ["Targeted Therapy"],
    },
  },
  {
    slug: "general-medicine",
    title: "General Medicine",
    category: "core",
    sections: {
      overview: "General medicine handles overall health and common illnesses.",
      diagnostics: ["Blood Tests", "Routine Checkups"],
      treatments: ["Medication", "Lifestyle Management"],
      technologies: ["Modern Diagnostic Tools"],
    },
  },
  {
    slug: "pulmonology",
    title: "Pulmonology",
    category: "core",
    sections: {
      overview: "Pulmonology deals with lung and respiratory diseases.",
      diagnostics: ["Pulmonary Function Test", "Chest X-ray"],
      treatments: ["Asthma Care", "COPD Treatment"],
      technologies: ["Ventilator Support"],
    },
  },
  {
    slug: "nephrology",
    title: "Nephrology",
    category: "core",
    sections: {
      overview: "Nephrology focuses on kidney-related diseases.",
      diagnostics: ["Kidney Function Test", "Urine Analysis"],
      treatments: ["Dialysis", "Kidney Care"],
      technologies: ["Advanced Dialysis Units"],
    },
  },

  // Surgical
  {
    slug: "spine-surgery",
    title: "Spine Surgery",
    category: "Surgical",
    sections: {
      overview: "Spine surgery treats spinal disorders and injuries.",
      diagnostics: ["Spine MRI", "X-ray"],
      treatments: ["Disc Surgery", "Spinal Fusion"],
      technologies: ["Minimally Invasive Surgery"],
    },
  },
  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    category: "Surgical",
    sections: {
      overview: "Gastroenterology deals with digestive system disorders.",
      diagnostics: ["Endoscopy", "Colonoscopy"],
      treatments: ["Ulcer Treatment", "Liver Care"],
      technologies: ["Advanced GI Procedures"],
    },
  },
  {
    slug: "surgical-gastroenterology",
    title: "Surgical Gastroenterology",
    category: "Surgical",
    sections: {
      overview: "Surgical gastroenterology focuses on GI surgeries.",
      diagnostics: ["GI Scan", "Endoscopy"],
      treatments: ["Liver Surgery", "Pancreas Surgery"],
      technologies: ["Laparoscopic Surgery"],
    },
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    category: "Surgical",
    sections: {
      overview: "Orthopedics deals with bones and joints.",
      diagnostics: ["Bone Scan", "X-ray"],
      treatments: ["Fracture Care", "Joint Replacement"],
      technologies: ["Robotic Joint Surgery"],
    },
  },
  {
    slug: "arthroscopy-arthroplasty",
    title: "Arthroscopy – Arthroplasty",
    category: "Surgical",
    sections: {
      overview: "Focuses on joint surgeries and replacements.",
      diagnostics: ["Joint Imaging"],
      treatments: ["Knee Replacement", "Arthroscopy"],
      technologies: ["Minimally Invasive Tools"],
    },
  },
  {
    slug: "urology",
    title: "Urology",
    category: "Surgical",
    sections: {
      overview: "Urology deals with urinary system and male health.",
      diagnostics: ["Urine Test", "Ultrasound"],
      treatments: ["Kidney Stone Removal", "Prostate Care"],
      technologies: ["Laser Surgery"],
    },
  },
  {
    slug: "vascular-surgery",
    title: "Vascular Surgery",
    category: "Surgical",
    sections: {
      overview: "Vascular surgery treats blood vessel conditions.",
      diagnostics: ["Doppler Scan"],
      treatments: ["Bypass Surgery", "Vein Treatment"],
      technologies: ["Endovascular Procedures"],
    },
  },

  // Support
  {
    slug: "rheumatology",
    title: "Rheumatology",
    category: "Support",
    sections: {
      overview: "Rheumatology deals with joints and autoimmune diseases.",
      diagnostics: ["Blood Tests"],
      treatments: ["Arthritis Care"],
      technologies: ["Advanced Therapies"],
    },
  },
  {
    slug: "obstetrics-gynecology",
    title: "Obstetrics & Gynecology",
    category: "Support",
    sections: {
      overview: "Women’s health, pregnancy, and reproductive care.",
      diagnostics: ["Ultrasound"],
      treatments: ["Pregnancy Care", "Gynec Surgeries"],
      technologies: ["Modern Maternity Care"],
    },
  },
  {
    slug: "pediatrics-neonatology",
    title: "Pediatrics & Neonatology",
    category: "Support",
    sections: {
      overview: "Child and newborn healthcare services.",
      diagnostics: ["Child Health Screening"],
      treatments: ["Vaccination", "Neonatal Care"],
      technologies: ["NICU"],
    },
  },
  {
    slug: "dental-maxillofacial",
    title: "Dental & Maxillo Facial",
    category: "Support",
    sections: {
      overview: "Dental and facial surgical treatments.",
      diagnostics: ["Dental X-ray"],
      treatments: ["Tooth Extraction", "Jaw Surgery"],
      technologies: ["Digital Dentistry"],
    },
  },
  {
    slug: "anaesthesiology-pain",
    title: "Anaesthesiology & Pain Management",
    category: "Support",
    sections: {
      overview: "Pain relief and anesthesia services.",
      diagnostics: ["Pain Assessment"],
      treatments: ["Pain Therapy"],
      technologies: ["Advanced Monitoring"],
    },
  },
  {
    slug: "critical-care",
    title: "Critical Care",
    category: "Support",
    sections: {
      overview: "Intensive care for critical patients.",
      diagnostics: ["ICU Monitoring"],
      treatments: ["Life Support"],
      technologies: ["Advanced ICU Systems"],
    },
  },
  {
    slug: "emergency-medicine",
    title: "Emergency Medicine",
    category: "Support",
    sections: {
      overview: "Immediate care for emergencies and trauma.",
      diagnostics: ["Emergency Tests"],
      treatments: ["Trauma Care"],
      technologies: ["24/7 Emergency Systems"],
    },
  },
];

export default SPECIALITIES;
