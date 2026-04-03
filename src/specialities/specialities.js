import image1 from "../assets/images/Services/shot-operating-room-assistant-hands-out-instruments-surgeons-operation-surgeons-perform-operation-professional-medical-doctors-performing-surgery.jpg";
import image2 from "../assets/images/Services/doctor-checking-patient.jpg";
import bannerCardio from "../assets/images/Services/doctor-who-advise-treating-patient-with-heart-disease-2.jpg";

const SPECIALITIES = [
  // ==================== CORE SPECIALITIES ====================
  {
    slug: "cardiology",
    title: "Cardiology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: `Our state-of-the-art heart clinics, combined with a highly experienced team of Cardiologists and well trained Nursing and Technicians, place us at the forefront of Cardiac Care. Every treatment plan is tailored to ensure the best clinical outcomes, guiding each patient toward a healthier heart and a better quality of life. The Department of Cardiology at Prachin Global Hospital is equipped with cutting-edge technology and advanced infrastructure to deliver world-class cardiac care.`,

      diagnosticsTitle: "Advanced Diagnostic Tools",
      diagnosticsDescription: "We offer comprehensive cardiac diagnostics including:",
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
      proceduresNote: "Advanced cardiac support using Impella and ECMO-assisted devices",

      images: [image1, image2],

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
      technologiesNote: "Complex cardiothoracic interventions with minimal complications",
    },
  },

  {
    slug: "neurology",
    title: "Neurology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: `Prachin Global Hospital is equipped to treat conditions affecting the Brain, Spinal Cord, Nerves, and muscles with precision and care. Our team of highly experienced Neuro Physicians and Neurosurgeons brings together international standards, vast clinical experience and patient-first ethics to deliver world-class neurological care.`,

      diagnosticsTitle: "Advanced Neurology & Neurosurgery Care",
      diagnosticsDescription: `At Prachin Global Hospital, we offer a comprehensive range of non-invasive, minimally invasive, and surgical treatments tailored to each patient’s condition. Our state-of-the-art infrastructure includes:`,

      diagnostics: [
        "HEPA-filtered modular operation theatres",
        "Advanced Neuro ICUs with 24/7 monitoring",
        "High-end diagnostic and imaging facilities",
        "Dedicated neurophysiology and rehabilitation units",
      ],
      diagnosticsDescription2: "Both outpatient and inpatient services are designed to ensure accurate diagnosis, effective treatment, and smooth recovery.",

      proceduresTitle: "Comprehensive Neurological Diagnostics",
      proceduresDescription: `Our Department of Neurophysiology provides advanced diagnostic testing essential for evaluating nervous system disorders. These tests help in early detection, accurate diagnosis, and effective treatment planning.`,

      proceduresSubTitle: "Diagnostic Tests Include:",
      procedures: [
        "Electromyography (EMG): Detects muscle weakness, nerve damage, and muscular disorders by recording electrical activity in muscles.",
        "Nerve Conduction Studies (NCS): Measures the speed and strength of nerve signals, helping diagnose conditions such as peripheral neuropathy, carpal tunnel syndrome, and radiculopathy.",
        "Electroencephalogram (EEG)",
        "CT Scan",
        "MRI Scan",
        "Neuro Lab",
      ],

      conditionstreatedtitle: "Key Neurological Conditions Treated",
      conditionstreateddesc: "At Prachin Global Hospital, our expert neurological team manages a wide spectrum of neurological disorders, including:",
      conditionstreatedpoints: [
        "Stroke (Ischemic & Hemorrhagic)",
        "Dementia",
        "Parkinsonism",
        "Amyotrophic Lateral Sclerosis (ALS)",
        "Multiple Sclerosis",
        "Alzheimer’s Disease",
        "Tourette’s Syndrome",
        "Neuromuscular Disorders",
        "Congenital Spine Disorders",
      ],

      Majorconditions: [
        {
          title: "Stroke",
          description: "A medical emergency caused by disrupted blood flow to the brain. Early treatment can prevent disability.",
        },
        {
          title: "Dementia",
          description: "Disorders affecting memory and cognition including Alzheimer’s and vascular dementia.",
        },
        {
          title: "Epilepsy",
          description: "Neurological condition with recurrent seizures managed through long-term care.",
        },
        {
          title: "Parkinsonism",
          description: "Movement disorder causing tremors and stiffness, treated for better quality of life.",
        },
        {
          title: "ALS",
          description: "Progressive disease affecting muscle control with multidisciplinary care support.",
        },
        {
          title: "Multiple Sclerosis",
          description: "Autoimmune condition affecting nerves causing weakness and coordination issues.",
        },
        {
          title: "Alzheimer’s Disease",
          description: "Neurodegenerative disorder affecting memory and cognitive function.",
        },
        {
          title: "Tourette’s Syndrome",
          description: "Condition with involuntary movements and vocal tics, often starting in childhood.",
        },
      ],

      technologiesTitle: "Your Trusted Destination for Neurological Care in Hyderabad",
      technologiesNote: `At Prachin Global Hospital, we combine medical excellence with human compassion to deliver trusted neurological care. Early diagnosis, advanced treatment, and personalized care plans ensure the best possible outcomes for every patient.`,
    },
  },

  {
    slug: "neuro-surgery",
    title: "Neuro Surgery",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: `At Prachin Global Hospital, the Department of Neurosurgery stands as a center of excellence, offering advanced and comprehensive care for patients with complex neurological conditions. Our department is led by highly experienced and dedicated Neurosurgeons who provide round-the-clock services, ensuring timely and expert treatment for patients from across the region.`,

      moreoverview: `Equipped with state-of-the-art infrastructure and modern operation theatres, Prachin Global Hospital delivers world-class neurosurgical care. The department performs a wide range of neurosurgical procedures every year, maintaining high standards of precision, safety, and patient outcomes.`,

      proceduresTitle: "Our Neurosurgery Services Include",
      procedures: [
        "Brain Tumor surgery",
        "Spinal Cord and Spine Surgery",
        "Traumatic brain and spine injury management",
        "Minimally invasive neurosurgery",
        "Neuro-critical care",
        "Treatment planning and advanced diagnostics",
        "Post-surgical rehabilitation and supportive therapies",
      ],
      proceduresNote: `Our multidisciplinary approach ensures that every patient receives personalized treatment—from diagnosis and surgical planning to recovery and rehabilitation.`,
    },
  },

  {
    slug: "oncology",
    title: "Oncology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: "Over the years, Prachin Global Hospital has grown into a trusted destination for advanced cancer care, expanding its services across key locations in Hyderabad. With dedicated and well-equipped cancer centers, the hospital is committed to delivering world-class oncology services that focus not only on treatment but also on prevention, early diagnosis, rehabilitation, and long-term survivorship.",

      moreoverview: "Our team of highly experienced cancer specialists—including Medical Oncologists, Surgical Oncologists—provides comprehensive and personalised cancer care. We firmly believe that treating cancer goes beyond medical intervention alone. Understanding the emotional, psychological, and social challenges faced by cancer patients and their families is central to our approach. Hence, we adopt a holistic care model that supports patients emotionally and mentally throughout their treatment journey. This integrated, multidisciplinary philosophy strengthens our commitment to excellence and positions Prachin Global Hospital among the leading cancer hospitals in Hyderabad.",

      proceduresTitle: "Specialised Oncology Services",
      proceduresDescription: `Prachin Global Hospital is home to a distinguished panel of oncologists specialising in a wide range of cancer disciplines:`,
      procedures: [
        "Head and Neck Oncology – Expert diagnosis and precision treatment for cancers affecting the oral cavity, throat, larynx, and surrounding regions",
        "Thoracic Oncology – Advanced care for lung and chest-related cancers using cutting-edge therapeutic technologies",
        "Orthopaedic Oncology – Comprehensive management of bone and soft tissue tumours with both surgical and advanced non-surgical techniques",
        "Gynaecological Oncology – Personalised and compassionate treatment for cancers of the female reproductive system",
        "Nephrological & Urological Oncology – Specialised care for kidney, bladder, prostate, and other urological cancers to ensure complete patient-centered treatment",
      ],
      proceduresNote: "Each specialty works in close collaboration to ensure accurate diagnosis, timely intervention, and optimal clinical outcomes.",

      images: [image1, image2],

      diagnosticsTitle: "Prachin Global Institute of Medical Oncology",
      diagnosticsDescription: `The Department of Medical Oncology at Prachin Global Hospital is fully equipped with modern daycare chemotherapy wards, oncology-trained nursing staff, and an experienced medical team. Cancer treatment planning is carried out through a multidisciplinary tumor board, involving medical oncologists, surgical oncologists, radiation oncologists, pathologists, and radiologists. This collaborative decision-making process ensures evidence-based, consensus-driven treatment plans that enhance treatment success.`,

      diagnosticssubtitle: "With rapid advancements in oncology, including targeted therapy and immunotherapy, Prachin Global Hospital stays at the forefront of innovation. Our facilities include:",
      diagnostics: [
        "Outpatient oncology services",
        "Daycare and inpatient chemotherapy units",
        "A specialised paediatric oncology ward",
        "One of the largest in-house bone marrow transplantation units",
        "Advanced chemotherapy delivery using chemoports",
        "AI-assisted diagnosis, analysis, and personalised treatment planning",
        "Access to some of the most advanced PET-CT imaging systems for early and accurate cancer detection",
      ],
    },
  },

  {
    slug: "general-medicine",
    title: "General Medicine",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: "Expert General Medicine Care for all age groups is your first step to accurate diagnosis and effective treatment. Our General Medicine and Internal Medicine Department offers comprehensive Outpatient and Inpatient care for a wide range of medical conditions i.e. Seasonal and Viral Fever, Fatigue, Chronic Diseases or unexplained symptoms and Diabetic Treatments. Our Physicians provide precise diagnosis, timely treatment and holistic care management.",

      diagnosticsTitle: "Key Services",
      diagnostics: [
        "Treatment for acute illnesses such as viral infections, flu, and respiratory problems",
        "Management of chronic diseases like diabetes, hypertension, and thyroid disorders",
        "Preventive care including health screenings and annual checkups",
        "Lifestyle and diet counseling",
        "Referrals and coordination with specialty departments",
      ],

      proceduresTitle: "Why Choose Us",
      procedures: ["Qualified and Experienced Physicians with a patient-centered approach"],

      extraSectionTitle: "Minimally Invasive General and Laparoscopic Surgery",
      extraSectionContent: `Advanced General and Laparoscopic Surgery services offering expert surgical care with traditional and minimally invasive techniques, our Surgeons Team ensures Safe, Precise, Treatment focused on faster recovery with close clinical monitoring of professional and qualified doctors supervision with excellent individual nursing care.`,

      screeningTitle: "Key Surgical Services",
      screeningContent: `Laparoscopic surgeries: Gall Bladder Removal, Hernia Repair (Inguinal, Ventral, Umbilical), Appendectomy, Colectomy (Colon Removal), Spleenectomy.`,

      technologiesTitle: "Open surgeries for abdominal conditions",
      technologies: [
        "Minor procedures: removal of lumps, cysts, abscesses",
        "Emergency Surgical Care",
        "Preoperative and postop",
      ],
    },
  },

  {
    slug: "pulmonology",
    title: "Pulmonology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: "Our Pulmonology Department offers specialized care for a wide range of respiratory diseases, with a team of experienced Lung Specialists, we are committed to diagnosing and treating conditions that affect the lungs and breathing.",

      proceduresTitle: "Comprehensive Services provide advanced treatment for",
      procedures: [
        "Asthma Treatment",
        "Chronic Obstructive Pulmonary Disease (COPD)",
        "Sleep apnea diagnosis",
        "Bronchitis care",
        "Pneumonia treatment",
        "Tuberculosis management",
        "Lung infection treatment",
      ],
      proceduresNote: "Smoking-related lung disease care",

      images: [image1, image2],

      extraSectionTitle: "Why Choose Our Pulmonologist",
      extraSectionContent: `Our chest specialists use the latest diagnostic tools, including pulmonary function tests and high-resolution imaging, to ensure accurate diagnosis. Whether you’re facing acute symptoms or chronic respiratory issues, our team delivers personalized care and long-term support.`,
    },
  },

  {
    slug: "nephrology",
    title: "Nephrology",
    category: "core",
    banner: bannerCardio,
    sections: {
      overview: `Our Nephrology Department is one of the Best, offering specialized and compassionate kidney care for patients of all ages. Under the guidance of top Nephrologists and supported by advanced medical infrastructure, our hospital delivers world-class diagnosis and treatment for a wide range of kidney disorders.`,

      moreoverview: "As a leading Kidney Specialist Hospital our multidisciplinary Nephrology team focuses on accurate diagnosis, preventive care, advanced dialysis, and transplant preparation — ensuring the best outcomes for every patient.",

      diagnosticsTitle: "Advanced Nephrology Technology & Expertise",
      diagnosticsDescription: "We combine clinical expertise with cutting-edge technology to deliver seamless renal care. Our nephrology units are equipped with next-generation dialysis systems, renal imaging, and critical-care facilities for continuous kidney monitoring.",

      diagnostics: [
        "Hemodiafiltration (HDF): Enhances toxin removal and improves dialysis efficiency.",
        "Continuous Renal Replacement Therapy (CRRT): For critically ill patients requiring constant filtration support",
        "Continuous Ambulatory Peritoneal Dialysis (CAPD): Portable, home-based dialysis option for long-term patients",
        "Renal Biopsy & Catheter Procedures: Including AV fistula fashioning and tunneled catheter (Permcath) insertions, performed with precision and safety",
        "Comprehensive Nephrology Services",
        "Our nephrology department provides a full spectrum of kidney care services, from preventive screening to end-stage renal disease management.",
        "Management of Chronic Kidney Disease (CKD) and Acute Kidney Failure",
        "Treatment of Diabetic & Hypertensive Kidney Diseases",
        "Electrolyte and Acid–Base Imbalance management",
        "Autoimmune & Glomerular Disorders",
        "Nephrolithiasis (Kidney Stones) and Urinary Tract Infections",
        "Kidney Disease in Pregnancy",
        "Nephrotic Syndrome & Glomerulonephritis",
        "Hemodialysis & Peritoneal Dialysis",
        "Kidney Transplant Evaluation & Post-Transplant Care",
        "Every treatment plan is customized based on patient health, risk factors, and lifestyle — ensuring long-term renal stability and improved quality of life.",
      ],
    },
  },

  // ==================== SURGICAL SPECIALITIES ====================
  {
    slug: "spine-surgery",
    title: "Spine Surgery",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `Prachin Global Hospital is recognized as one of the best spine hospitals in Hyderabad, offering comprehensive and evidence-based treatment for spinal disorders and injuries. Our expert team of spine surgeons and orthopedic spine specialists are highly experienced in advanced minimally invasive techniques, laser spine surgery, and motion-preserving procedures to treat patients of all age groups.`,

      proceduresTitle: "We provide specialized treatment for a wide range of spinal conditions, including:",
      procedures: [
        "Herniated Disc (Slipped Disc)",
        "Degenerative Disc Disease (DDD)",
        "Cervical, Lumbar & Thoracic Spondylosis",
        "Spinal Stenosis & Sciatica",
        "Myelopathy (Cervical or Thoracic)",
        "Vertebral & Spinal Fractures",
        "Scoliosis, Kyphosis & Lordosis",
        "Ankylosing Spondylitis",
        "Spinal Infections & Spinal Osteomyelitis",
        "Tuberculosis of the Spine (Pott’s Disease)",
        "Spinal Cord Tumors & Metastatic Spine Cancer",
      ],

      diagnosticsDescription: `The Department of Spine Surgery at Prachin Global Hospital is equipped with state-of-the-art diagnostic and surgical facilities, including high-resolution digital X-rays, CT scans, MRI, EMG, and nerve conduction studies. We also offer advanced robotic and endoscopic spine surgery techniques to ensure precision, faster recovery, and minimal post-operative discomfort.`,

      technologiesNote: `Our leading spine surgeons specialize in procedures such as spinal fusion, laminectomy, and discectomy, delivering patient-centric care focused on pain relief, spinal stability, mobility restoration, and improved quality of life. With a multidisciplinary approach and advanced rehabilitation services, Prachin Global Hospital ensures optimal recovery and long-term spine health for every patient.`,
    },
  },

  {
    slug: "gastroenterology",
    title: "Gastroenterology",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `Prachin Global Hospitals well-equipped Gastroenterology Department has state-of-the-art facilities and cutting-edge technology, our Gastroenterology Department provides comprehensive treatment to patients with stomach ailments. Whether you require diagnostic tests, endoscopic procedures, or specialized treatments for addressing your gastro issues, our gastroenterologists are committed to delivering optimal outcomes.

As a leading gastroenterology hospital, Prachin Global Hospital ensures that patients receive the highest quality care for their gastrointestinal concerns. Our team of top gastroenterologists offer advanced diagnostic and therapeutic procedures to address a wide range of gastrointestinal disorders.

Additionally, we deliver specialized services such as haemorrhoidal band ligation, aimed at offering effective solutions for specific conditions.

Rest assured that at our Gastroenterology Department, you will receive personalized care and access to state-of-the-art facilities to ensure your well-being.`,

      diagnosticsTitle: "Key Features:",
      diagnostics: [
        "Endoscopy and ERCP suite",
        "World class Scopy instruments and equipment",
      ],

      proceduresTitle: "Services we offer:",
      procedures: [
        "Diagnostic Endoscopy",
        "Colonoscopy",
        "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
        "Therapeutic Endoscopic Interventions",
        "Barium Swallow",
        "Barium Enema",
        "Endoscopy and colonoscopy procedures.",
        "Treatment for acid reflux, GERD, and ulcers.",
        "Management of IBS and chronic abdominal pain.",
        "Liver disease and hepatitis management.",
        "Advanced care for Crohn’s disease and ulcerative colitis.",
        "Upper Gastrointestinal Series",
        "Upper GI Endoscopy",
        "Liver Biopsy",
        "Sigmoidoscopy",
        "Virtual Colonoscopy for Colorectal Cancer Screening",
        "Colectomy",
      ],
    },
  },

  {
    slug: "surgical-gastroenterology",
    title: "Surgical Gastroenterology",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `The Department of Surgical Gastroenterology at Prachin Global Hospital is dedicated to providing advanced surgical care for disorders of the digestive system. Our expert team of surgical gastroenterologists specializes in minimally invasive and laparoscopic procedures to treat a wide range of conditions affecting the esophagus, stomach, intestines, liver, pancreas, gallbladder, and colorectal region.

We are highly experienced in managing both cancerous and non-cancerous conditions, including anorectal cancers, hernias, gallbladder diseases, pancreatic disorders, obesity-related conditions, and complex gastrointestinal surgeries. By using the latest minimally invasive techniques, we ensure smaller incisions, minimal scarring, reduced post-operative pain, shorter hospital stays, and faster recovery for our patients.`,

      moreoverview: `At Prachin Global Hospital, patient well-being is always our top priority. Our multidisciplinary team works closely with each patient—from accurate diagnosis and detailed treatment planning to surgery and post-operative rehabilitation. We believe in transparent communication and take the time to explain your condition, available treatment options, the surgical procedure, and expected outcomes, ensuring you feel informed, comfortable, and confident throughout your journey.`,

      proceduresTitle: "Our specialists have strong expertise in:",
      procedures: [
        "Esophagogastric surgery",
        "Pancreatic and biliary surgery",
        "Colorectal surgery",
        "Bariatric (weight-loss) surgery",
        "Liver and advanced gastrointestinal procedures",
      ],

      technologiesNote: `With modern operation theatres, advanced diagnostic facilities, and comprehensive critical care support, Prachin Global Hospital is committed to delivering safe, effective, and world-class surgical treatment for digestive diseases. Our goal is to improve both the quality of life and clinical outcomes for every patient we serve.`,
    },
  },

  {
    slug: "orthopedics",
    title: "Orthopedics",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `Don’t let musculoskeletal concerns limit your life. Schedule an appointment with our Orthopedics specialists today and take the first step toward improved mobility and a pain-free future.

Prachin Global Hospitals widely exploring as one of the Best Orthopedic Hospitals in Telangana, our Orthopedic Division, led by internationally trained Surgeons, performs complex and high-precision procedures for the full range of Bone, Joint, Ligament, Tendon, Muscle, and Spine conditions.

With state-of-the-art laminar-airflow, heap filters operating theatres, advanced imaging, and a multidisciplinary team approach, we ensure uncompromised safety, precision, and rapid recovery.

Our programs include robotic Knee and Hip Replacement, Advanced Arthroscopy, Joint preservation, Sports Injury Management, Spine Surgery and comprehensive rehabilitation—delivering superior outcomes with minimal discomfort and shorter hospital stays.`,

      proceduresTitle: "We specialize in:",
      procedures: [
        "Advanced Minimally Invasive Arthroscopic Procedures",
        "Total or Partial Knee, Hip & Shoulder Replacement Techniques",
        "Expertise in Ligament & Tendon Reconstruction",
        "Dedicated Unit for Management of Sports Injuries",
        "Latest Generation Robotic-Assisted Joint Replacements",
        "Best Physiotherapy & Rehabilitation Support",
      ],
    },
  },

  {
    slug: "arthroscopy-arthroplasty",
    title: "Arthroscopy – Arthroplasty",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `The Department of Arthroscopy & Arthroplasty at Prachin Global Hospital offers advanced, specialized care for sports injuries, joint disorders, and degenerative conditions affecting bones, ligaments, cartilage, and muscles. Whether you are a professional athlete, a fitness enthusiast, or someone dealing with chronic joint pain, our expert team provides comprehensive diagnosis, treatment, and rehabilitation under one roof.

Sports and activity-related injuries can occur due to improper posture, repetitive movements, sudden impact, or overuse. Old injuries may also flare up unexpectedly, affecting performance and daily life. At Prachin Global Hospital, we understand that complete recovery requires not just treatment, but precision care, guided rehabilitation, and long-term joint protection.`,

      proceduresTitle: "Arthroscopy – Minimally Invasive Joint Care",
      procedures: [
        "Knee ligament reconstruction (ACL, PCL injuries)",
        "Meniscus repair",
        "Shoulder arthroscopy for rotator cuff injuries",
        "Ankle and hip arthroscopy",
        "Treatment of sports-related cartilage damage",
      ],

      proceduresNote: `Arthroscopy is a modern, minimally invasive surgical procedure used to diagnose and treat joint problems through small incisions using a specialized camera.

These procedures ensure faster recovery, minimal pain, reduced hospital stay, and quicker return to daily activities or sports.`,

      extraSectionTitle: "Arthroplasty – Advanced Joint Replacement",
      extraSectionContent: `For patients suffering from severe arthritis, joint degeneration, or long-standing joint damage, our Arthroplasty services provide advanced joint replacement solutions, including:

Total Knee Replacement
Total Hip Replacement
Partial Joint Replacement
Revision Joint Replacement Surgery

Using modern surgical techniques and high-quality implants, we aim to restore mobility, reduce pain, and significantly improve quality of life.`,

      screeningTitle: "Comprehensive Sports Medicine & Rehabilitation",
      screeningContent: `The department at Prachin Global Hospital brings together orthopedic surgeons, arthroscopy specialists, physiotherapists, athletic trainers, and rehabilitation experts. Our integrated approach includes:

Advanced diagnostic imaging
Non-surgical injury management
Regenerative therapies
Post-surgical physiotherapy
Personalized rehabilitation programs

Every injury is unique, and every patient requires customized care. Our team focuses on helping individuals recover safely and return to peak performance as quickly as possible.`,

      technologiesNote: `With world-class infrastructure, modern operation theatres, and internationally aligned treatment protocols, Prachin Global Hospital is committed to delivering excellence in Arthroscopy, Arthroplasty, and Sports Medicine—ensuring the best outcomes with compassionate care.`,
    },
  },

  {
    slug: "urology",
    title: "Urology",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `Our Urology department is recognized as the top Urology Hospital offering comprehensive solutions in Urology & Andrology. Our skilled Urologists provide top-quality care, leveraging state-of-the-art technology for optimal outcomes.

We specialize in a wide range of services, including Stone Disease treatments (Laser Technology, ESWL, PCNL, URSL, CLP, PCCL), BPH treatment (minimally invasive techniques), Reconstructive Procedures (Ureter Re-implantation, Hypospadias Repair, Orchiopexy), Female Urology solutions (VVF repair, stress incontinence surgery, tubal recanalization), Stricture Urethra treatments (Optical Urethrotomy, Urethroplasty), Andrology services (male infertility evaluation, management, epididymal aspiration, testicular biopsy) and Erectile Dysfunction Management (Rigiscan assessment, vacuum therapy)

As a leading Urology Hospital we are dedicated to delivering exceptional results across all our specialized services.`,

      proceduresTitle: "Services Offered",
      procedures: [
        "Kidney stone management and lithotripsy.",
        "Prostate treatments, including laser surgery.",
        "Male infertility diagnosis and treatment.",
        "Bladder control and incontinence management.",
        "Urological cancer screening and treatment.",
        "Comprehensive Kidney Care by Expert Nephrologists",
      ],

      extraSectionTitle: "Prostate Disease Management",
      extraSectionContent: `Prostate enlargement (Benign Prostatic Hyperplasia – BPH) is a common condition in aging men and can significantly affect quality of life. At Prachin Global Hospital, we offer advanced and minimally invasive prostate treatments, such as:

TURP (monopolar and bipolar)
Laser prostate surgeries
Laparoscopic prostatectomy

These procedures help relieve urinary symptoms while preserving function and comfort.`,

      screeningTitle: "Male Infertility & Female Urology Care",
      screeningContent: `Prachin Global Hospital is also a leader in treating male infertility, offering advanced procedures such as microscopic varicocelectomy. Sexual health conditions like erectile dysfunction and ejaculation disorders are managed with sensitivity and expertise.

For women, we provide effective solutions for urinary incontinence, including TVT and TOT surgeries, restoring confidence and quality of life.`,

      technologiesTitle: "Pediatric Urology Services",
      technologies: ["Pediatric Urology Services", "Renal Transplantation"],

      technologiesNote: `Our pediatric urology department focuses on diagnosing and treating urinary and genital conditions in children, including congenital anomalies, infections, and structural abnormalities. Treatment plans may involve medical therapy, surgery, and coordinated care with pediatric specialists.

Renal transplantation at Prachin Global Hospital offers hope and improved quality of life for patients with end-stage kidney disease. Our transplant program follows strict safety protocols and provides complete pre- and post-transplant care for optimal outcomes.

Why Choose Prachin Global Hospital for Urology Care?

Highly experienced urologists
Advanced laser and minimally invasive technology
Comprehensive urology services under one roof
Patient-centered care with excellent recovery outcomes
Trusted by patients across Hyderabad

With a strong focus on clinical excellence, innovation, and compassionate care, Prachin Global Hospital stands among the best urology hospitals in Hyderabad, committed to delivering reliable, advanced, and ethical urological treatment for every patient.`,
    },
  },

  {
    slug: "vascular-surgery",
    title: "Vascular Surgery",
    category: "Surgical",
    banner: bannerCardio,
    sections: {
      overview: `Prachin Global Hospitals recognized as the best vascular & endovascular surgery hospital in Telangana, out top vascular surgeons specializing in the treatment of diseases affecting arteries, veins, and the lymphatic system. Our multidisciplinary team delivers world-class care for vascular conditions, from varicose veins to life-threatening arterial blockages and limb-salvage emergencies.

We provide advanced vascular care under one roof, focusing on peripheral artery disease, diabetic foot complications, varicose veins, deep vein thrombosis, lymphedema, carotid artery stenosis, and aortic aneurysms. Our experts offer round-the-clock emergency vascular services and personalized care from diagnosis through complete recovery.`,

      proceduresTitle: "What Is Vascular & Endovascular Surgery?",
      procedures: [
        "Management of peripheral artery disease (PAD) and critical limb ischemia",
        "Treatment of varicose veins and chronic venous insufficiency",
        "Care for diabetic foot ulcers with vascular complications",
        "Minimally invasive endovascular procedures using catheters, balloons, and stents",
        "Open surgical reconstruction for complex vascular conditions",
      ],

      proceduresNote: `Vascular & Endovascular Surgery is the specialized field focused on treating diseases of the circulatory system outside the heart and brain. This includes:

It is a super specialty requiring advanced training beyond general surgery, ensuring every patient receives the most appropriate, evidence-based vascular care.`,
    },
  },

  // ==================== SUPPORT SPECIALITIES ====================
 {
  slug: "rheumatology",
  title: "Rheumatology",
  category: "Support",
  banner: bannerCardio,
  sections: {
    overview: `Rheumatic diseases are conditions that affect the joints, tendons, ligaments, bones, and muscles. Commonly referred to as musculoskeletal disorders, these conditions can significantly impact mobility, comfort, and overall quality of life. The medical specialty that focuses on diagnosing and treating these disorders is known as Rheumatology.

At Prachin Global Hospital, the Department of Rheumatology is dedicated to providing comprehensive, evidence-based care for patients suffering from a wide range of rheumatic and autoimmune conditions. Our team of experienced rheumatologists and healthcare professionals offers personalized treatment plans tailored to each patient’s specific needs.`,

    proceduresTitle: "Common Symptoms of Rheumatic Diseases",
    procedures: [
      "Joint pain and swelling",
      "Stiffness, especially in the morning",
      "Reduced range of motion",
      "Inflammation in joints and surrounding tissues",
      "Muscle pain and fatigue"
    ],

    proceduresNote: `Our specialists focus not only on symptom relief but also on identifying the root cause of the condition. Treatment plans may include medications, lifestyle modifications, dietary guidance, physical therapy, stress management, and when necessary, advanced interventional procedures.`,

    diagnosticsTitle: "Comprehensive Rheumatology Care",
    diagnostics: [
      "Expert clinical evaluation and consultation",
      "Advanced laboratory investigations",
      "Imaging services such as MRI, CT scan, Ultrasound, and DEXA scan",
      "Intra-articular and soft tissue injections",
      "Pain management therapies",
      "Functional rehabilitation and physiotherapy support"
    ],

    diagnosticsDescription: `The Rheumatology Center at Prachin Global Hospital is equipped with advanced diagnostic and therapeutic facilities. We provide a full spectrum of services including:

Our multidisciplinary team includes rheumatologists, orthopedic specialists, physiotherapists, trained nurses, and rehabilitation experts who work together to ensure optimal patient outcomes.`,

    extraSectionTitle: "Conditions Treated",
    extraSectionContent: `The Department of Rheumatology at Prachin Global Hospital treats more than 100 types of rheumatic and autoimmune conditions, including:`,
    
    // Converted to array as requested
    conditionsTreated: [
      "Rheumatoid Arthritis",
      "Osteoarthritis",
      "Osteoporosis",
      "Psoriatic Arthritis",
      "Juvenile Rheumatoid Arthritis",
      "Ankylosing Spondylitis",
      "Acute Rheumatic Fever",
      "Reactive Arthritis",
      "Connective Tissue Disorders",
      "Systemic Lupus Erythematosus (SLE)",
      "Systemic Sclerosis",
      "Gout",
      "Osteomalacia & Rickets",
      "Viral Arthritis",
      "Polymyositis",
      "Fibromyalgia",
      "Metabolic Bone Disorders"
    ],

    extraSectionNote: `Our specialists are highly experienced in managing both adult and pediatric rheumatologic conditions, including childhood arthritis and complex autoimmune diseases.`,

    technologiesNote: `Advanced Infrastructure & Patient-Centered Approach

At Prachin Global Hospital, we follow standardized, globally accepted treatment protocols supported by modern technology and world-class infrastructure. Every patient undergoes a detailed assessment using objective measurement tools to accurately evaluate disease severity and progression.

We are committed to providing holistic care that includes patient education, dietary counseling, physical activity guidance, medication management, and rehabilitation services. Our focus is to help patients regain mobility, reduce pain, prevent disease progression, and improve overall quality of life.

With years of experience and a strong commitment to excellence, Prachin Global Hospital stands as a trusted center for advanced rheumatology care, delivering compassionate service and effective treatment for all types of joint and autoimmune disorders.`
  }
},

  {
    slug: "obstetrics-gynecology",
    title: "Obstetrics & Gynecology",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: `Our Obstetrics and Gynecology Department is equipped dedicated Department with advanced Technology, including Ultrasound Machines and monitoring equipment. This allows us to provide accurate diagnosis and exceptional care throughout pregnancy and beyond.`,

      moreoverview: `Our team of expert Obstetricians and Gynecologists committed to women’s health and well-being with a wealth of knowledge and a compassionate approach providing comprehensive care that addresses a wide range of women’s health concerns.`,

      extraSectionTitle: "Comprehensive Women’s Healthcare",
      extraSectionContent: `Our team of Obstetrics and Gynecology dedicate to comprehensive women’s healthcare, from routine check-ups to expert maternity care with Trust. Our specialists provide personalized prenatal and postnatal care, ensuring a safe and joyful journey into motherhood and compassionate care tailored to your unique needs.`,

      diagnosticsTitle: "Key Features",
      diagnostics: [
        "Dedicated Obstetrics and Gynecology Unit with Pre Delivery and ICU",
        "Dedicated Operation Theatre",
        "Equipped for Robotic Surgery",
        "Fully equipped for Mother and Neonate, Child care",
        "State-of-the-art Neonatal Intensive Care Unit (NICU)",
        "Highly skilled team of obstetricians, gynecologists, and neonatologists",
        "Expertise in managing high-risk pregnancies",
        "Around-the-clock emergency care and support",
        "Painless Delivery",
        "Tailored care plans for every mother and child."
      ],

      proceduresTitle: "Specialized Care For Your Baby with Safety and Comfort",
      proceduresDescription: `Collaborating with you, we will develop a comprehensive and personalized birth plan tailored to both your needs and those of your baby, covering every phase of pregnancy and delivery. Our dedicated team will provide support throughout labor and delivery by designing an appropriate program to ensure you remain comfortable and well-supported before and after childbirth.`,

      technologiesNote: `With advanced infrastructure, experienced specialists, and a patient-centric approach, Prachin Global Hospital strives to make every pregnancy and women’s health journey safe, memorable, and positive.`,
    },
  },

  {
    slug: "pediatrics-neonatology",
    title: "Pediatrics & Neonatology",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: `Our Pediatrics and Neonatology are specialized, dedicated to the comprehensive care of infants, children, and adolescents, addressing their unique physiological, developmental and healthcare needs from birth through adolescence. While Pediatrics covers the general health and treatment of diseases for children up to 18 years old, Neonatology is a subspecialty focused on the medical care of newborns, especially those who are premature, have low birth weight, or have serious illnesses requiring intensive care.`,

      diagnosticsTitle: "Key Aspects of Pediatric Care",
      diagnostics: [
        "Preventive Care: Routine check-ups, growth monitoring, and immunization.",
        "Acute/Chronic Illness Management: Treating common illnesses (fever, cough, infections) and managing chronic conditions (asthma, diabetes, epilepsy).",
        "Developmental Monitoring: Ensuring children meet developmental milestones.",
        "Subspecialty Care: Pediatric departments often include specialized areas like cardiology, neurology, and orthopedics for complex conditions."
      ],

      proceduresTitle: "Key Aspects of Neonatology",
      proceduresDescription: `Our Neonatologists work in Neonatal Intensive Care Units (NICUs) and provide advanced, specialized care for infants in their first 28 days of life, although care may extend for premature infants.`,

      procedures: [
        "Expertise in High-Risk New born Care, Managing infants born prematurely (before 37 weeks), with low birth weight, or with birth defects.",
        "Specialized Treatments: Using advanced equipment for life-saving interventions, such as ventilators, incubators for temperature regulation, and phototherapy for jaundice."
      ],

      extraSectionTitle: "Family-Centered Care",
      extraSectionContent: `Our Neonatal units focus heavily on supporting families during the often-emotional, long-term stay in the NICU. Our both specialties ensure that children, from the moment of birth, receive the medical care and developmental support needed for a healthy life.`,

      technologiesNote: `With state-of-the-art facilities and a highly skilled multidisciplinary team, we are committed to nurturing the well-being of every child.`,
    },
  },

  {
    slug: "dental-maxillofacial",
    title: "Dental & Maxillo Facial",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: "Dental and facial surgical treatments.",
      diagnosticsTitle: "Key Services",
      diagnostics: [
        "Dental X-ray",
        "Tooth Extraction",
        "Jaw Surgery",
        "Digital Dentistry"
      ],
      technologiesNote: `Equipped with modern facilities and experienced specialists for comprehensive dental and maxillofacial care.`,
    },
  },

  {
    slug: "anaesthesiology-pain",
    title: "Anaesthesiology & Pain Management",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: `The Department of Anaesthesiology & Pain Management at Prachin Global Hospital plays a vital role in ensuring safe, comfortable, and pain-free surgical and medical care. Our highly skilled anaesthesiologists are dedicated to providing round-the-clock support for all types of surgeries, from minor procedures to complex and high-risk operations.`,

      moreoverview: `At Prachin Global Hospital, we offer comprehensive anaesthesia services including general anaesthesia, regional anaesthesia, spinal and epidural anaesthesia, monitored anaesthesia care (MAC), and sedation for diagnostic and minimally invasive procedures. Every patient undergoes a thorough pre-anaesthetic evaluation to assess medical history, existing health conditions, and potential risks, ensuring a personalized and safe anaesthesia plan.`,

      diagnosticsTitle: "Our Approach to Patient Safety",
      diagnostics: [
        "Our team works closely with surgeons, critical care specialists, and nursing staff to maintain the highest standards of patient safety before, during, and after surgery.",
        "Advanced monitoring systems and modern equipment help us maintain precise control over vital parameters throughout the procedure."
      ],

      proceduresTitle: "Pain Management Services",
      proceduresDescription: `In addition to surgical anaesthesia, the department also specializes in acute and chronic pain management. We provide effective treatment for:`,

      procedures: [
        "Post-operative pain",
        "Cancer-related pain",
        "Back and neck pain",
        "Joint and musculoskeletal pain",
        "Nerve-related pain conditions"
      ],

      proceduresNote: `Our pain management approach includes medications, nerve blocks, epidural injections, and other minimally invasive procedures designed to improve comfort and enhance quality of life.`,

      technologiesNote: `At Prachin Global Hospital, our Department of Anaesthesiology & Pain Management is committed to delivering safe anaesthesia care and comprehensive pain relief, ensuring every patient experiences comfort, safety, and faster recovery.`,
    },
  },

  {
    slug: "critical-care",
    title: "Critical Care",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: `The Critical Care Unit at Prachin Global Hospital is a state-of-the-art facility dedicated to delivering exceptional emergency and critical care services. Designed to meet international standards, our ICU provides timely, precise, and compassionate care to patients facing life-threatening conditions. In case of any medical emergency, our expert team is always ready to respond swiftly and effectively.`,

      moreoverview: `As a leading emergency hospital in Hyderabad, Prachin Global Hospital offers round-the-clock emergency services, available 24 hours a day, 7 days a week. Our emergency care is powered by the seamless integration of advanced research, clinical excellence, and patient-centric care.`,

      diagnosticsTitle: "Advanced Critical Care Infrastructure",
      diagnostics: [
        "A highly skilled multidisciplinary team—including paramedics, critical care nurses, emergency physicians, trauma specialists, surgeons, and doctors from multiple specialties—works together to manage a wide spectrum of medical emergencies.",
        "Our Critical Care Unit is equipped with cutting-edge medical technology to manage all types of critical and emergency conditions with precision and expertise.",
        "The ICU features advanced, fully monitored beds designed to continuously track vital physiological parameters of critically ill patients.",
        "With quick access to diagnostics, imaging, laboratory services, and specialist consultations, we ensure prompt decision-making and timely intervention when every second matters."
      ],

      proceduresTitle: "Conditions We Manage",
      proceduresDescription: `Our round-the-clock critical care services have successfully treated a wide range of complex medical conditions, including:`,

      procedures: [
        "Post-operative and post-surgical critical care",
        "Severe infections and sepsis",
        "Cardiac and respiratory emergencies",
        "Neurological emergencies",
        "Trauma and accident-related injuries",
        "Multi-organ dysfunction and other life-threatening illnesses"
      ],

      technologiesNote: `At Prachin Global Hospital, critical care goes beyond technology—it is about compassion, vigilance, and commitment. Our goal is not just to save lives, but to support recovery with dignity, safety, and trust.`,
    },
  },

  {
    slug: "emergency-medicine",
    title: "Emergency Medicine",
    category: "Support",
    banner: bannerCardio,
    sections: {
      overview: `Trauma / Emergency Care at Prachin Global Hospitals is an exclusive center that offers immediate treatment in any emergency with the highest level of care, round-the-clock. All our Emergency Medicine specialists, trauma surgeons and support staffs are highly trained to deal with cases from minor injuries to advanced trauma care for patients in need of prompt care. Our trauma care specialists address the patient at the best time possible with the right care.`,

      moreoverview: `Our Emergency Team offers day-and-night service with 24/7 access to modern operation theatres, imaging & diagnostic tools and fully stocked 24-hour pharmacies for immediate and accurate diagnosis of the patient’s condition.`,

      diagnosticsTitle: "Expert Accident and Emergency Care",
      diagnostics: [
        "An important distinguishing characteristic of Prachin Global Hospitals trauma and emergency services is the experience and expertise of the many subspecialty services that are available 24 hours a day, seven days a week to any ill or injured patient in need",
        "Largest emergency facility in the States of Telangana and Andhra Pradesh with highest number of ICU beds",
        "Only hospital to have Central Laboratory"
      ],

      technologiesNote: `At Prachin Global Hospital, our Emergency Medicine department stands out for its unmatched infrastructure, experienced team, and commitment to providing immediate, high-quality emergency and trauma care.`,
    },
  },
];

export default SPECIALITIES;