export type AnswerSection = {
  heading: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type Question = {
  no: number;
  tag?: string;
  marks?: string;
  co?: string;
  text: string;
  answer?: AnswerSection[];
};

export type ModuleData = {
  id: number;
  title: string;
  subtitle: string;
  color: string;
  bg: string;
  accent: string;
  topics: string;
  hours: string;
  questions: Question[];
};

export const modules: ModuleData[] = [
  {
    id: 1,
    title: "Module I",
    subtitle: "Basics of Cloud Computing",
    color: "#0ea5e9",
    bg: "#0c1a2e",
    accent: "#38bdf8",
    topics: "Cloud Types · NIST Model · Cloud Cube Model · Deployment Models · Service Models · Characteristics · Benefits & Limitations",
    hours: "6L",
    questions: [
      {
        no: 1,
        text: "Write two advantages of perceiving infrastructure as software in the Cloud environment rather than as hardware in the traditional IT environment.",
        answer: [
          { heading: "1. Easy Scalability", body: "In cloud computing, infrastructure can be increased or decreased quickly through software commands without changing physical hardware.\nExample: Extra servers can be added instantly during high traffic." },
          { heading: "2. Automation and Flexibility", body: "Resources such as storage, servers, and networking can be automatically configured and managed. This reduces manual work, time, and operational cost." },
        ],
      },
      {
        no: 2,
        text: "What is meant by Vendor Lock-In? Which service model is most affected by it?",
        answer: [
          { heading: "Vendor Lock-In", body: "Vendor Lock-In means a customer becomes dependent on one cloud provider and finds it difficult to move to another provider because of differences in technology, pricing, or compatibility." },
          { heading: "Most Affected Service Model", body: "PaaS (Platform as a Service) is most affected because applications are built using provider-specific tools and platforms." },
        ],
      },
      {
        no: 3,
        tag: "Exam Q2(a)", marks: "1+1", co: "CO1 · Understand/LOCQ",
        text: 'Explain "Pay as you go" and "Measured service" in Cloud computing.',
        answer: [
          { heading: "Pay as you go", body: "Users pay only for the resources they actually use.\nExample: Paying only for the storage or computing hours consumed." },
          { heading: "Measured Service", body: "Cloud systems automatically measure resource usage such as CPU usage, storage, bandwidth, and number of users. This helps in billing and resource optimization." },
        ],
      },
      {
        no: 4,
        tag: "Exam Q3(a)", marks: "1+3", co: "CO1 · Apply/HOCQ",
        text: "Consider the following scenario: An educational and research organization is interested to install Cloud. The stakeholders are professors, research fellows, and students. Professors share study materials and take online exams. Research fellows execute complex algorithms. Students discuss doubts in forums.\n• Which deployment model is suitable?\n• Why have you chosen this deployment model? Explain with proper justification.",
        answer: [
          { heading: "Suitable Deployment Model", body: "Community Cloud" },
          { heading: "Justification", body: "A Community Cloud is shared among organizations having similar goals and requirements.\n• Professors can share study materials securely.\n• Research fellows can use high-performance computing resources for complex algorithms.\n• Students can communicate through forums and collaborative platforms.\n• It provides better security and privacy than public cloud.\n• Cost is shared among participating educational and research institutions." },
        ],
      },
      {
        no: 5,
        text: 'Explain "Multi-tenancy" and "Rapid provisioning" in Cloud Computing.',
        answer: [
          { heading: "Multi-tenancy", body: "In multi-tenancy, multiple users or organizations share the same cloud infrastructure and resources while their data remains isolated and secure.\nExample: Many users using the same cloud server independently." },
          { heading: "Rapid Provisioning", body: "Rapid provisioning means cloud resources can be created and deployed quickly whenever needed.\nExample: A virtual machine can be launched within minutes." },
        ],
      },
      {
        no: 6,
        text: '"Cloud Computing has evolved from mainframe, cluster computing, and grid computing and has features of each of these three technologies"—Comment on this statement.',
        answer: [
          { heading: "From Mainframe Computing", body: "• Centralized resource sharing\n• Support for multiple users" },
          { heading: "From Cluster Computing", body: "• High performance\n• Load balancing" },
          { heading: "From Grid Computing", body: "• Distributed resource sharing\n• Parallel processing across multiple systems" },
          { heading: "Conclusion", body: "Cloud computing combines all these features with virtualization, scalability, and internet-based access." },
        ],
      },
      {
        no: 7,
        text: "Discuss the roles of the following actors of the NIST Reference model: i) Cloud Consumer  ii) Cloud Broker",
        answer: [
          { heading: "i) Cloud Consumer", body: "A Cloud Consumer is the user or organization that uses cloud services.\nResponsibilities: Access cloud services, manage applications and data, pay for used resources.\nExample: A company using AWS or Google Cloud." },
          { heading: "ii) Cloud Broker", body: "A Cloud Broker acts as an intermediary between cloud providers and consumers.\nFunctions: Service selection, performance monitoring, security management, and cost optimization." },
        ],
      },
      {
        no: 8,
        text: "What is Hybrid Cloud?",
        answer: [
          { heading: "Hybrid Cloud", body: "A Hybrid Cloud is a combination of two or more cloud deployment models such as private cloud, public cloud, or community cloud. These clouds remain separate but work together." },
          { heading: "Advantages", body: "• Better flexibility\n• Improved security\n• Cost efficiency\n• Sensitive data can stay in private cloud while public cloud handles general tasks" },
        ],
      },
      {
        no: 33,
        text: "_____-as-a-Service provides you with a completed product that the service provider runs and manages. Give two examples of the same.",
        answer: [
          { heading: "Answer", body: "Software-as-a-Service (SaaS) provides a completed product that the service provider runs and manages." },
          { heading: "Examples", body: "1. Google Docs\n2. Microsoft Office 365" },
        ],
      },
      {
        no: 34,
        text: "What are the five main features or attributes of Cloud Computing according to the NIST model?",
        answer: [
          { heading: "Five Essential Characteristics (NIST)", body: "1. On-demand self-service\n2. Broad network access\n3. Resource pooling\n4. Rapid elasticity\n5. Measured service\n\nThese features make cloud computing flexible and efficient." },
        ],
      },
      {
        no: 35,
        tag: "Exam Q2(b)", marks: "2+4", co: "CO1 · Understand/LOCQ",
        text: "What is the Cloud Cube model? Mention the four dimensions of the Cloud Cube model.",
        answer: [
          { heading: "Cloud Cube Model", body: "The Cloud Cube Model is a framework used to classify and analyze cloud deployment models based on different dimensions." },
          { heading: "Four Dimensions", body: "1. Internal / External – Whether cloud resources are inside or outside the organization.\n2. Proprietary / Open – Whether standards are owned privately or openly available.\n3. Perimeterized / De-perimeterized – Whether security is inside a fixed boundary or spread across networks.\n4. Insourced / Outsourced – Whether services are managed internally or by third-party providers." },
        ],
      },
      {
        no: 37,
        text: "What do the internal and external dimensions of the Cloud Cube model signify?",
        answer: [
          { heading: "Internal Dimension", body: "Resources and infrastructure are maintained within the organization's boundary.\n• More security, better control, used in private clouds." },
          { heading: "External Dimension", body: "Resources are hosted outside the organization by third-party providers.\n• Lower cost, easy accessibility, common in public clouds." },
        ],
      },
      {
        no: 38,
        text: 'What is "Resource pooling" in Cloud?',
        answer: [
          { heading: "Resource Pooling", body: "Resource pooling means cloud providers combine computing resources such as storage, memory, processing power, and network bandwidth. These shared resources serve multiple users dynamically according to demand." },
          { heading: "Advantages", body: "• Efficient resource utilization\n• Reduced cost\n• Better scalability\n• Supports multi-tenancy\n\nExample: Multiple customers sharing the same data center resources securely." },
        ],
      },
      {
        no: 39,
        text: "What is meant by the private cloud and the public cloud deployment models? Discuss one advantage and one disadvantage of each of them.",
        answer: [
          { heading: "Private Cloud", body: "A cloud infrastructure used only by a single organization.\nAdvantage: Better security and control.\nDisadvantage: High setup and maintenance cost." },
          { heading: "Public Cloud", body: "A cloud infrastructure available to the public through the internet.\nAdvantage: Low cost and easy access.\nDisadvantage: Less security and privacy." },
        ],
      },
      {
        no: 40,
        text: 'Distinguish between "on-site private cloud" and "outsourced private cloud".',
        answer: [
          { heading: "Comparison Table", body: "On-site Private Cloud → Managed inside the organization | Infrastructure on company premises | More control & security | Higher cost\n\nOutsourced Private Cloud → Managed by third-party provider | Infrastructure hosted externally | Lower maintenance responsibility | Cost effective" },
        ],
      },
      {
        no: 65,
        text: "A community cloud serves a group of Cloud Consumers with shared concerns such as _______, rather than serving a single organization as does a private cloud.",
        answer: [
          { heading: "Answer", body: "A community cloud serves a group of Cloud Consumers with shared concerns such as security, policy, mission, and compliance requirements." },
        ],
      },
      {
        no: 66,
        text: "Explain service orchestration in Cloud Computing.",
        answer: [
          { heading: "Service Orchestration", body: "Service orchestration means automatic coordination and management of different cloud services to work together efficiently." },
          { heading: "Functions", body: "• Automates workflows\n• Integrates multiple services\n• Manages resources dynamically\n\nExample: Automatically creating storage, networking, and virtual machines together." },
        ],
      },
      {
        no: 67,
        tag: "Exam Q2(c)", marks: "2+2", co: "CO1 · Analyse/HOCQ",
        text: 'Critically comment on the terms "Elasticity" and "Scalability" with respect to Cloud Computing.',
        answer: [
          { heading: "Elasticity", body: "Elasticity means automatically increasing or decreasing resources according to workload demand.\nExample: Adding servers during high traffic and removing them later." },
          { heading: "Scalability", body: "Scalability means increasing system capacity to handle more workload.\nTypes: Vertical scaling and Horizontal scaling." },
          { heading: "Key Difference", body: "Elasticity is automatic and temporary, while scalability is planned and long-term." },
        ],
      },
      {
        no: 68,
        tag: "Exam Q3(c)", marks: "5", co: "CO1 · Remember/LOCQ",
        text: "Define the five actors in the NIST Reference model.",
        answer: [
          { heading: "1. Cloud Consumer", body: "Uses cloud services provided by the cloud provider." },
          { heading: "2. Cloud Provider", body: "Provides cloud infrastructure and services." },
          { heading: "3. Cloud Broker", body: "Acts as an intermediary between provider and consumer." },
          { heading: "4. Cloud Auditor", body: "Checks security, performance, and compliance of cloud services." },
          { heading: "5. Cloud Carrier", body: "Provides network connectivity between provider and consumer." },
        ],
      },
      {
        no: 71,
        text: "What is XaaS?",
        answer: [
          { heading: "XaaS", body: "XaaS means Anything as a Service or Everything as a Service. It refers to delivering different IT services through the internet.\nExamples: SaaS, PaaS, IaaS" },
        ],
      },
      {
        no: 72,
        text: "What do you mean by Infrastructure as a Service? Give an example.",
        answer: [
          { heading: "Infrastructure as a Service (IaaS)", body: "IaaS provides virtualized computing resources such as servers, storage, and networking. Users manage operating systems and applications while the provider manages hardware.\nExample: Amazon Web Services EC2" },
        ],
      },
      {
        no: 79,
        text: "What is TCO? What cost benefits can be obtained by using the Cloud instead of going for an on-premises solution?",
        answer: [
          { heading: "TCO (Total Cost of Ownership)", body: "TCO includes all costs related to hardware, software, maintenance, electricity, and management." },
          { heading: "Cost Benefits of Cloud", body: "• No hardware purchase\n• Reduced maintenance cost\n• Pay only for used resources\n• Lower electricity and infrastructure cost" },
        ],
      },
      {
        no: 91,
        text: "Describe the ownership dimension of the cloud cube model.",
        answer: [
          { heading: "Ownership Dimension", body: "The ownership dimension describes whether cloud resources are Proprietary (owned privately, using vendor-specific technologies) or Open (based on open standards allowing better interoperability)." },
        ],
      },
      {
        no: 92,
        text: "Mention any three advantages of Cloud Computing over the traditional IT environment.",
        answer: [
          { heading: "Three Advantages", body: "1. Scalability – Resources can be increased easily.\n2. Cost Saving – No need to buy expensive hardware.\n3. Accessibility – Services can be accessed from anywhere through the internet." },
        ],
      },
      {
        no: 93,
        text: "What is the security boundary dimension of a Cloud Cube model?",
        answer: [
          { heading: "Security Boundary Dimension", body: "The security boundary dimension defines whether security exists inside a fixed boundary (Perimeterized) or across distributed networks (De-perimeterized). It helps determine how security is managed in cloud environments." },
        ],
      },
      {
        no: 94,
        tag: "Exam Q4(d)", marks: "2", co: "CO1 · Apply/HOCQ",
        text: "Consider a scenario where a Cloud service provider creates a new service offering which allows the cloud users to deploy virtual machines and specify their network configurations. What cloud service model is this? Why?",
        answer: [
          { heading: "Service Model: IaaS", body: "This is Infrastructure as a Service (IaaS)." },
          { heading: "Reason", body: "The provider allows users to deploy virtual machines, configure networking, and manage infrastructure resources — all of which are characteristics of IaaS." },
        ],
      },
      {
        no: 101,
        text: "Mention three disadvantages of Cloud Computing.",
        answer: [
          { heading: "Three Disadvantages", body: "1. Security and Privacy Risks – Data is stored on external servers.\n2. Internet Dependency – Cloud services require stable internet connectivity.\n3. Vendor Lock-In – Difficult to switch from one cloud provider to another." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Module II",
    subtitle: "Cloud Services & Insight",
    color: "#8b5cf6",
    bg: "#150f2e",
    accent: "#a78bfa",
    topics: "IaaS Concepts · Abstraction & Virtualization · Hypervisors · Machine Reference Model · PaaS · SaaS · IDaaS",
    hours: "7L",
    questions: [
      {
        no: 9,
        text: "What is server consolidation?",
        answer: [
          {
            heading: "Q9. Server Consolidation",
            body: "Server consolidation is the process of reducing the number of physical servers by running multiple virtual machines on a single server using virtualization.\n\nIn traditional systems, many servers remain underutilized. Virtualization allows better utilization of hardware resources.\n\nAdvantages:\n1. Reduces hardware cost\n2. Saves power and cooling cost\n3. Better resource utilization\n4. Simplifies management\n\nExample:\nOne physical server can host multiple virtual machines running different operating systems or applications.",
          },
        ],
      },
      {
        no: 10,
        tag: "Exam Q4(a)",
        marks: "2",
        co: "CO2 · Remember/LOCQ",
        text: "What do you mean by Virtualization in Cloud Computing?",
        answer: [
          {
            heading: "Q10. Virtualization in Cloud Computing",
            body: "Virtualization is a technology that creates virtual versions of servers, storage, operating systems, or networks on a single physical machine.\n\nIt allows multiple virtual machines (VMs) to share the same hardware using a hypervisor.\n\nFeatures:\n1. Better resource utilization\n2. Isolation between VMs\n3. Easy scalability\n4. Reduced infrastructure cost\n\nExample:\nRunning Linux and Windows virtual machines on the same server.",
          },
        ],
      },
      {
        no: 11,
        text: "Name three hardware virtualization techniques.",
        answer: [
          {
            heading: "Q11. Three Hardware Virtualization Techniques",
            body: "The three hardware virtualization techniques are:\n1. Full Virtualization\n   Guest operating systems run without modification.\n2. Paravirtualization\n   Guest operating systems are modified to interact with the hypervisor.\n3. Hardware-Assisted Virtualization\n   CPU provides direct support for virtualization using Intel VT-x or AMD-V technologies.",
          },
        ],
      },
      {
        no: 12,
        text: "What are the security rings and privilege modes of instruction execution? Give a suitable schematic diagram with necessary explanation.",
        answer: [
          {
            heading: "Q12. Security Rings and Privilege Modes",
            body: "Security rings privilege levels used by CPU to protect hardware and system resources.\n\nSecurity Rings:\n• Ring 0 → Highest privilege level used by operating system kernel\n• Ring 3 → Lowest privilege level used by user applications\n\nPrivilege Modes:\n1. Kernel Mode\n   o Full access to hardware and memory\n   o Used by operating system\n2. User Mode\n   o Limited access to resources\n   o Used by application programs",
            imageSrc: "/q12.png",
            imageAlt: "Security rings and privilege modes diagram",
          },
          {
            heading: "Importance",
            body: "• Improves security\n• Prevents unauthorized access\n• Protects operating system",
          },
        ],
      },
      {
        no: 13,
        text: "Discuss the roles of the following modules of a hypervisor: i) Dispatcher  ii) Allocator  iii) Interpreter",
        answer: [
          {
            heading: "Q13. Roles of Hypervisor Modules\ni) Dispatcher",
            body: "The dispatcher manages execution of virtual machines and allocates CPU time to each VM.\n\nFunctions:\n• Schedules VM execution\n• Performs context switching",
          },
          {
            heading: "ii) Allocator",
            body: "The allocator distributes hardware resources among virtual machines.\n\nFunctions:\n• Allocates memory\n• Manages storage and network resources",
          },
          {
            heading: "iii) Interpreter",
            body: "The interpreter handles privileged instructions issued by guest operating systems.\n\nFunctions:\n• Translates sensitive instructions\n• Maintains security and isolation",
          },
        ],
      },
      {
        no: 14,
        text: "Mention the three criteria established by Goldberg and Popek that must be met by the virtual machine manager to efficiently support virtualization.",
        answer: [
          {
            heading: "Q14. Goldberg and Popek Virtualization Criteria",
            body: "Goldberg and Popek proposed three requirements for efficient virtualization.\n1. Equivalence\nPrograms running inside a VM should behave similarly to programs running on real hardware.\n2. Resource Control\nThe virtual machine monitor (VMM) must have complete control over hardware resources.\n3. Efficiency\nMost instructions should execute directly on hardware for better performance.\nThese criteria ensure secure and efficient virtualization.",
          },
        ],
      },
      {
        no: 15,
        tag: "Exam Q5(a)",
        marks: "4",
        co: "CO2 · Analyse/IOCQ",
        text: "Discuss the VMware full virtualization architecture. Draw the schematic diagram and give the necessary explanation.",
        answer: [
          {
            heading: "Q15. VMware Full Virtualization Architecture",
            body: "VMware full virtualization allows unmodified guest operating systems to run on virtual machines.\nA hypervisor sits between hardware and virtual machines and controls resource allocation.\n\nArchitecture Diagram:",
            imageSrc: "/q15.png",
            imageAlt: "VMware full virtualization architecture diagram",
          },
          {
            heading: "Working",
            body: "1. Hypervisor creates virtual machines.\n2. Guest OS believes it is running on real hardware.\n3. Sensitive instructions are translated by the hypervisor.\n4. Hardware resources are shared among VMs.\n\nAdvantages:\n• No modification of guest OS required\n• Better isolation and resource sharing",
          },
        ],
      },
      {
        no: 16,
        text: "Discuss the hardware-assisted virtualization technique.",
        answer: [
          {
            heading: "Q16. Hardware-Assisted Virtualization",
            body: "Hardware-assisted virtualization uses processor support such as Intel VT-x and AMD-V for virtualization.\nThe CPU directly supports virtualization functions, reducing hypervisor overhead.\n\nWorking:\n• CPU creates separate execution environments for guest OS and hypervisor.\n• Sensitive instructions are handled efficiently by hardware.\n\nAdvantages:\n1. Better performance\n2. Improved security\n3. Supports unmodified guest OS\n4. Reduced hypervisor complexity",
          },
        ],
      },
      {
        no: 41,
        text: "Distinguish between Type I and Type II hypervisors with a suitable schematic diagram and necessary explanation.",
        answer: [
          {
            heading: "Q41. Type I and Type II Hypervisors",
            body: "Type I Hypervisor\nRuns directly on hardware\nBetter performance\nMore secure\nUsed in data centers\n\nType II Hypervisor\nRuns on host operating system\nLower performance\nLess secure\nUsed in personal computers\n\nType I Diagram\nType II Diagram",
            imageSrc: "/q41.png",
            imageAlt: "Type I and Type II hypervisor comparison diagram",
          },
          {
            heading: "Examples",
            body: "• Type I: VMware ESXi, Xen\n• Type II: VirtualBox, VMware Workstation",
          },
        ],
      },
      {
        no: 42,
        tag: "Exam Q4(b)",
        marks: "3",
        co: "CO2 · Analyse/IOCQ",
        text: '"Virtualization has a number of advantages, but it also has downsides"—Justify this statement.',
        answer: [
          {
            heading: "Q42. Advantages and Disadvantages of Virtualization",
            body: "Virtualization provides many benefits but also has some disadvantages.\n\nAdvantages:\n1. Better hardware utilization\n2. Reduced infrastructure cost\n3. Easy backup and recovery\n4. Supports multiple operating systems\n\nDisadvantages:\n1. Performance overhead\n2. Security risks if hypervisor fails\n3. Complex management\n4. Requires skilled administrators\n\nThus, virtualization improves flexibility and efficiency but also introduces management and security challenges.",
          },
        ],
      },
      {
        no: 43,
        text: "What is ISA, ABI, and API with respect to a machine reference model?",
        answer: [
          {
            heading: "Q43. ISA, ABI, and API",
            body: "ISA (Instruction Set Architecture)\nISA defines the interface between hardware and software.\nIt includes:\n• Instructions\n• Registers\n• Memory addressing\nExample: x86, ARM\n\nABI (Application Binary Interface)\nABI defines interaction between compiled applications and operating system at binary level.\nIt includes:\n• System calls\n• Memory usage\n• Data formats\n\nAPI (Application Programming Interface)\nAPI defines how applications interact with software libraries and operating systems.\nExample: Windows API",
          },
        ],
      },
      {
        no: 44,
        text: 'Explain the components "guest", "host", and "virtualization layer" in a virtualized environment.',
        answer: [
          {
            heading: "Q44. Guest, Host, and Virtualization Layer",
            body: "In a virtualized environment, three important components are guest, host, and virtualization layer.\n\nHost\nThe host is the physical computer or server that provides hardware resources such as CPU, memory, storage, and network.\n\nGuest\nThe guest is the virtual machine or guest operating system running on the host system. Multiple guest operating systems can run on one host.\n\nVirtualization Layer\nThe virtualization layer, also called hypervisor or VMM, sits between hardware and virtual machines.\n\nFunctions:\n• Creates virtual machines\n• Allocates resources\n• Maintains isolation among VMs",
          },
        ],
      },
      {
        no: 45,
        text: "Discuss the Xen paravirtualization architecture. Draw the schematic diagram and give the necessary explanation.",
        answer: [
          {
            heading: "Q45. Xen Paravirtualization Architecture",
            body: "Xen is a paravirtualized hypervisor where the guest operating systems are modified to communicate directly with the hypervisor.\n\nArchitecture Diagram:",
            imageSrc: "/q45.png",
            imageAlt: "Xen paravirtualization architecture diagram",
          },
          {
            heading: "Working",
            body: "1. Xen hypervisor runs directly on hardware.\n2. Guest OS is modified to use hypercalls.\n3. Hypervisor manages CPU, memory, and devices.\n4. Dom0 (Dom0) controls device management and guest VMs.\n\nAdvantages:\n• Better performance\n• Lower overhead\n\nDisadvantage:\n• Guest operating system modification required",
          },
        ],
      },
      {
        no: 69,
        text: "What is a middleware layer? In the Cloud, who uses the middleware layer? Who installs or manages the middleware layer in the Cloud?",
        answer: [
          {
            heading: "Q69. Middleware Layer in Cloud",
            body: "Middleware is a software layer between the operating system and applications that provides communication and management services.\n\nFunctions:\n• Database connectivity\n• Messaging services\n• Authentication\n• Application integration\n\nIn Cloud:\nMiddleware is mainly used by application developers and service providers.\n\nManagement:\nIn cloud computing, especially in PaaS, the cloud provider installs and manages the middleware layer.\n\nAdvantages:\n• Simplifies application development\n• Improves communication between applications",
          },
        ],
      },
      {
        no: 70,
        text: "What is a SLA? Mention at least three parameters usually specified in a SLA.",
        answer: [
          {
            heading: "Q70. SLA (Service Level Agreement)",
            body: "An SLA is a formal agreement between the cloud provider and customer that defines the expected quality of service.\n\nPurpose:\n• Defines responsibilities\n• Guarantees service quality\n• Ensures accountability\n\nCommon SLA Parameters:\n1. Availability/Uptime\n2. Response Time\n3. Security\n4. Backup and Recovery\n\nExample:\nA provider may guarantee 99.9% service availability.",
          },
        ],
      },
      {
        no: 73,
        text: "What do you mean by privileged and nonprivileged instructions?",
        answer: [
          {
            heading: "Q73. Privileged and Nonprivileged Instructions",
            body: "Privileged Instructions\nThese instructions execute only in kernel mode because they directly access hardware and critical resources.\n\nExamples:\n• I/O operations\n• Memory management\n• Interrupt handling\n\nFeatures:\n• Used by operating system\n• Restricted for security\n\nNonprivileged Instructions\nThese instructions can execute in user mode without affecting system security.\n\nExamples:\n• Arithmetic operations\n\nFeatures:\n• Used by application programs\n• Cannot directly control hardware",
          },
        ],
      },
      {
        no: 74,
        tag: "Exam Q4(c)",
        marks: "3+1+1",
        co: "CO2 · Understand/LOCQ",
        text: "Explain Full Virtualization. Mention one advantage and one disadvantage of this technique.",
        answer: [
          {
            heading: "Q74. Full Virtualization",
            body: "Full virtualization is a technique where the guest operating system runs without modification on virtual hardware created by a hypervisor.\n\nWorking:\n• Hypervisor creates complete virtual hardware.\n• Guest OS behaves as if it is running on real hardware.\n• Sensitive instructions are handled by the hypervisor.\n\nAdvantage:\n• Guest operating system does not need modification\n\nDisadvantage:\n• Performance overhead due to instruction translation",
          },
        ],
      },
      {
        no: 75,
        text: "Explain the technique of Para Virtualization. Clearly mention one advantage and one disadvantage of this technique.",
        answer: [
          {
            heading: "Q75. Para Virtualization",
            body: "Para virtualization is a virtualization technique where the guest operating system is modified to communicate directly with the hypervisor.\n\nWorking:\n• Guest OS uses hypercalls instead of privileged instructions.\n• Hypervisor manages hardware resources efficiently.\n\nAdvantage:\n• Better performance and lower overhead\n\nDisadvantage:\n• Guest OS must be modified",
          },
        ],
      },
      {
        no: 76,
        text: "Write short notes on the following: i) Memory Virtualization  ii) Operating System level Virtualization",
        answer: [
          {
            heading: "Q76. Short Notes",
            body: "i) Memory Virtualization\nMemory virtualization creates virtual memory spaces for virtual machines using physical memory.\n\nFunctions:\n• Memory allocation\n• Address translation\n• Isolation between VMs\n\nAdvantages:\n• Better memory utilization\n• Supports multiple VMs simultaneously\n\nii) Operating System Level Virtualization\nOperating system level virtualization allows multiple isolated containers to run on the same operating system kernel.\n\nFeatures:\n• Shared kernel\n• Lightweight virtualization\n• Fast startup\n\nExamples:\n• Docker\n• LXC Containers\n\nAdvantages:\n• Low overhead\n• Efficient resource usage",
          },
        ],
      },
      {
        no: 78,
        tag: "Exam Q5(c)",
        marks: "3+3",
        co: "CO1 · Remember/LOCQ",
        text: "Write short notes on the following: i) PaaS service model  ii) Network Virtualization  iii) SaaS service model  iv) IDaaS",
        answer: [
          {
            heading: "Q78. Short Notes",
            body: "i) PaaS Service Model\nPlatform as a Service (PaaS) provides a platform for application development, testing, and deployment.\n\nFeatures:\n• Development tools provided\n• Middleware managed by provider\n• Faster application development\n\nExample:\nGoogle App Engine\n\nii) Network Virtualization\nNetwork virtualization combines physical network resources into virtual networks.\n\nFeatures:\n• Virtual switches and routers\n• Flexible network management\n• Better scalability\n\nAdvantages:\n• Efficient network utilization\n• Simplified management\n\niii) SaaS Service Model\nSoftware as a Service (SaaS) provides ready-to-use software applications over the internet.\n\nFeatures:\n• Accessible through browser\n• No installation required\n• Managed by provider\n\nExample:\nMicrosoft Office 365\n\niv) IDaaS\nIdentity as a Service (IDaaS) provides cloud-based identity and access management services.\n\nFunctions:\n• Authentication\n• User management\n• Single Sign-On (SSO)\n\nAdvantages:\n• Improved security\n• Centralized identity control",
          },
        ],
      },
      {
        no: 95,
        text: "What is meant by the process-level techniques and system-level techniques in execution virtualization?",
        answer: [
          {
            heading: "Q95. Process-Level and System-Level Techniques in Execution Virtualization",
            body: "Process-Level Virtualization\nProcess-level virtualization virtualizes individual applications or processes.\n\nFeatures:\n• Platform independent execution\n• Runs a single application in virtual environment\n\nExample:\nJava Virtual Machine (JVM)\n\nSystem-Level Virtualization\nSystem-level virtualization virtualizes the entire operating system and hardware environment.\n\nFeatures:\n• Multiple operating systems run simultaneously\n• Uses hypervisor\n\nExample:\nVMware, VirtualBox\n\nDifference:\n• Process-level virtualizes applications only.\n• System-level virtualizes complete operating systems.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Module III",
    subtitle: "Cloud Solution Offerings (AWS)",
    color: "#f59e0b",
    bg: "#1a1200",
    accent: "#fbbf24",
    topics: "AWS Global Infrastructure · Shared Responsibility · Well-Architected Framework · EC2 · Auto Scaling · Load Balancer · Lambda · VPC · S3 · EBS · EFS · RDS · DynamoDB · Google Apps",
    hours: "5L + 7×2P",
    questions: [
      {
        no: 17,
        tag: "Exam Q6(a)",
        marks: "3×2",
        co: "CO2 · Remember/LOCQ",
        text: "Define Regions, Availability Zones, and Edge Locations.",
        answer: [
          { heading: "Region", body: "A Region is a physical geographic area with clustered AWS data centers. Examples: us-east-1, ap-south-1." },
          { heading: "Availability Zone (AZ)", body: "An Availability Zone is one or more data centers within a Region. AZs are physically separate and connected through low-latency links, which helps with fault tolerance and high availability." },
          { heading: "Edge Locations", body: "Edge Locations are data centers in major cities worldwide. They are used by CloudFront and Route 53 for low-latency content delivery." },
        ],
      },
      {
        no: 18,
        text: "The customer uses Amazon S3, VPC, EC2, and Oracle database. Fill up the table: (1) OS upgrades on EC2, (2) Physical security of data center, (3) Virtualization infrastructure, (4) EC2 security group settings, (5) Application configuration on EC2, (6) Oracle patches on RDS, (7) Oracle patches on EC2, (8) S3 bucket access configuration — Who is responsible: AWS or Customer?",
        answer: [
          {
            heading: "Shared Responsibility Table",
            body: "1. OS upgrades on EC2 - Customer\n2. Physical security of data center - AWS\n3. Virtualization infrastructure - AWS\n4. EC2 security group settings - Customer\n5. Application configuration on EC2 - Customer\n6. Oracle patches on RDS - AWS\n7. Oracle patches on EC2 - Customer\n8. S3 bucket access configuration - Customer",
          },
        ],
      },
      {
        no: 19,
        text: "Write four responsibilities for each, of the customers and the AWS according to the shared responsibility model.",
        answer: [
          {
            heading: "AWS (Security of the Cloud)",
            body: "1. Physical security of data centers\n2. Hardware and infrastructure maintenance\n3. Managing the hypervisor/virtualization layer\n4. Patching managed services such as RDS and Lambda",
          },
          {
            heading: "Customer (Security in the Cloud)",
            body: "1. OS updates and patches on EC2\n2. Configuring security groups and NACLs\n3. Managing IAM users, roles, and permissions\n4. Encrypting data in transit and at rest",
          },
        ],
      },
      {
        no: 20,
        tag: "Exam Q7(a)",
        marks: "2+5",
        co: "CO3 · Remember/LOCQ",
        text: "What is Amazon Machine Image? Write any five key decisions to make when you create an EC2 instance by using the AWS Management Console Launch Instance Wizard.",
        answer: [
          { heading: "AMI", body: "An Amazon Machine Image (AMI) is a pre-configured template containing the operating system and software needed to launch an EC2 instance. It acts as a blueprint for EC2 instances and can be AWS-provided, marketplace-based, or custom." },
          { heading: "Five Key Decisions", body: "1. AMI selection - choose the OS and software stack\n2. Instance type - choose CPU, RAM, and network capacity\n3. Network settings - choose VPC and subnet\n4. Storage configuration - set EBS volume size and type\n5. Security group - configure inbound and outbound firewall rules" },
        ],
      },
      {
        no: 21,
        text: "What are the four pillars of cost optimization of Amazon EC2?",
        answer: [
          { heading: "Four Pillars", body: "1. Right-sizing - match instance size to actual workload needs\n2. Elasticity - stop or scale down instances when not in use\n3. Optimal pricing model - use Reserved Instances, Spot Instances, or Savings Plans\n4. Storage optimization - delete unused volumes and snapshots, and use S3 lifecycle policies" },
        ],
      },
      {
        no: 22,
        text: "Which AWS service helps developers quickly deploy resources that can make use of different programming languages, such as .NET and Java?",
        answer: [
          { heading: "AWS Elastic Beanstalk", body: "AWS Elastic Beanstalk supports .NET, Java, Python, Node.js, PHP, Ruby, and Go. Developers upload code while AWS handles the infrastructure automatically." },
        ],
      },
      {
        no: 23,
        text: "How do security groups work? What is a Network Access Control List?",
        answer: [
          { heading: "Security Groups", body: "Security Groups are virtual firewalls at the instance level. They are stateful, so return traffic is automatically allowed. They allow rules only and are attached to EC2 instances or ENIs." },
          { heading: "Network ACL (NACL)", body: "A NACL is a virtual firewall at the subnet level. It is stateless, so inbound and outbound rules must be configured separately. It supports both allow and deny rules, and rules are evaluated in numbered order." },
        ],
      },
      {
        no: 24,
        text: "A company wants to store data that is not frequently accessed. What is the best and most cost-effective solution that should be considered?",
        answer: [
          { heading: "Best Storage Choice", body: "Amazon S3 Glacier or S3 Glacier Deep Archive is best for archival and long-term backup storage. For occasional access, S3 Standard-IA or S3 One Zone-IA can also be used." },
        ],
      },
      {
        no: 26,
        text: "DynamoDB supports two different kinds of primary keys. What are those and what are their significances?",
        answer: [
          { heading: "Partition Key (Simple)", body: "A simple primary key uses a single attribute and must be unique per item. DynamoDB hashes it to determine the storage partition. Example: UserID." },
          { heading: "Partition Key + Sort Key (Composite)", body: "A composite primary key uses two attributes together and must be unique as a pair. Items with the same partition key are stored together and sorted by the sort key. This enables efficient range queries. Example: UserID + OrderDate." },
        ],
      },
      {
        no: 29,
        text: "What are the six pillars of AWS well-architected framework? Explain any three of them.",
        answer: [
          { heading: "Six Pillars", body: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability." },
          { heading: "Security", body: "Security covers IAM, encryption, logging, and protection at all layers." },
          { heading: "Reliability", body: "Reliability focuses on auto-recovery, multi-AZ design, and avoiding single points of failure." },
          { heading: "Cost Optimization", body: "Cost Optimization is about pay-as-you-go usage, right-sizing, and using Reserved or Spot Instances." },
        ],
      },
      {
        no: 30,
        text: "Write any two Amazon Redshift use cases. Write four Amazon Aurora features.",
        answer: [
          { heading: "Redshift Use Cases", body: "1. Enterprise data warehousing and BI reporting\n2. Log analysis and clickstream analytics" },
          { heading: "Aurora Features", body: "1. 5x faster than MySQL and 3x faster than PostgreSQL\n2. Data replicated 6 ways across 3 AZs\n3. Fully managed by AWS with patching, backups, and failover\n4. Auto-scaling storage from 10 GB up to 128 TB" },
        ],
      },
      {
        no: 31,
        text: "Elastic Load Balancing distributes incoming application or network traffic ____________________.",
        answer: [
          { heading: "Answer", body: "Elastic Load Balancing distributes incoming application or network traffic across multiple targets such as EC2 instances, containers, IPs, or Lambda functions in one or more Availability Zones to ensure high availability and fault tolerance." },
        ],
      },
      {
        no: 36,
        tag: "Exam Q3(b)",
        marks: "1.5+1.5",
        co: "CO1 · Understand/LOCQ",
        text: "Differentiate between the horizontal scaling and the vertical scaling policies.",
        answer: [
          { heading: "Horizontal Scaling", body: "Horizontal scaling means adding more instances. It usually has no downtime and is supported by Auto Scaling Groups. The limit is virtually unlimited." },
          { heading: "Vertical Scaling", body: "Vertical scaling means increasing the size of a single instance. It usually requires downtime and is limited by the maximum instance size." },
        ],
      },
      {
        no: 46,
        text: "What are the three ways of interacting with AWS?",
        answer: [
          { heading: "Three Ways", body: "1. AWS Management Console - web-based GUI\n2. AWS CLI - terminal commands for scripting and automation\n3. AWS SDKs - language libraries such as Python, Java, and JavaScript for programmatic access" },
        ],
      },
      {
        no: 47,
        tag: "Exam Q5(b)",
        marks: "2",
        co: "CO3 · Analyse/IOCQ",
        text: '"In AWS, you pay less when you use more"—Justify.',
        answer: [
          { heading: "Justification", body: "AWS pricing often decreases as usage increases. Examples include tiered S3 pricing, lower data transfer costs at higher usage tiers, Reserved Instances with up to 72% off On-Demand pricing, Spot Instances with up to 90% savings, and lower CloudFront request costs at higher traffic volumes." },
        ],
      },
      {
        no: 48,
        text: "What is meant by the All Upfront, Partial Upfront, and No Upfront reserved instance pricing in AWS?",
        answer: [
          { heading: "Payment Options", body: "All Upfront means the full payment is made at the start of the term and gives the highest discount. Partial Upfront means part of the payment is made upfront and the rest is paid monthly, giving a medium discount. No Upfront means there is no initial payment and a reduced monthly fee is charged for the full term, giving the lowest discount." },
        ],
      },
      {
        no: 52,
        text: "How to use Amazon CloudWatch in connection with Amazon EC2?",
        answer: [
          { heading: "CloudWatch with EC2", body: "CloudWatch collects EC2 metrics such as CPU, network, disk, and status checks. It sets alarms that can trigger SNS, Auto Scaling, or EC2 actions. It can also stream EC2 logs, and dashboards visualize health and performance in real time." },
        ],
      },
      {
        no: 53,
        text: "What is Serverless computing? _________ is a serverless compute service that provides ___________.",
        answer: [
          { heading: "Serverless Computing", body: "Serverless computing is a model where the cloud provider manages servers and developers only write code. AWS Lambda is a serverless compute service that provides event-driven code execution without provisioning servers, auto-scaling, and billing per millisecond of use." },
        ],
      },
      {
        no: 54,
        text: "Write three Elastic Block Storage features and four uses.",
        answer: [
          { heading: "Features", body: "1. Persistent block storage that survives instance stop/restart\n2. Snapshot support with incremental backups stored in S3\n3. Encryption at rest using AES-256 with AWS KMS" },
          { heading: "Uses", body: "1. Boot or root volumes for EC2\n2. Database storage for MySQL or PostgreSQL on EC2\n3. Big data analytics such as Hadoop or Spark\n4. Enterprise applications such as SAP or Oracle" },
        ],
      },
      {
        no: 55,
        text: "Write any three ways Amazon Route 53 enables you to improve the availability of your applications that run on AWS.",
        answer: [
          { heading: "Route 53 Availability Features", body: "1. Failover routing redirects traffic to a healthy standby resource if the primary fails a health check.\n2. Latency-based routing sends users to the lowest-latency Region.\n3. Health checks continuously monitor endpoints and remove unhealthy ones from DNS responses." },
        ],
      },
      {
        no: 56,
        text: "Name a data archiving service provided by AWS. Explain the terms archive, vault and vault access policy.",
        answer: [
          { heading: "Archive Service", body: "Amazon S3 Glacier is AWS's data archiving service." },
          { heading: "Terms", body: "Archive is the basic storage unit in Glacier and can be any file or object from 1 byte to 40 TB. Vault is the container that holds archives and can hold up to 1,000 per Region per account. Vault access policy is a JSON policy that defines who can perform which operations on a vault." },
        ],
      },
      {
        no: 58,
        text: "DynamoDB runs exclusively on _______.",
        answer: [
          { heading: "Answer", body: "DynamoDB runs exclusively on SSDs, which are Solid State Drives." },
        ],
      },
      {
        no: 62,
        text: "Name three different load balancers. Fill up the table: containerized app traffic / spiky TCP / simple multi-protocol / static IP or IP target outside VPC / millions of requests with low latency / HTTPS requests.",
        answer: [
          { heading: "Three Load Balancers", body: "Application Load Balancer (ALB), Network Load Balancer (NLB), and Gateway Load Balancer." },
          { heading: "Use Case Table", body: "Containerized app traffic - ALB\nSpiky TCP - NLB\nSimple multi-protocol - NLB\nStatic IP or IP target outside VPC - NLB\nMillions of requests with low latency - NLB\nHTTPS requests - ALB" },
        ],
      },
      {
        no: 63,
        text: "How is Amazon CloudWatch used? Mention the four uses.",
        answer: [
          { heading: "Four Uses", body: "1. Monitoring - tracks AWS resource metrics in real time\n2. Alarms - triggers actions when metrics cross thresholds\n3. Log management - collects and stores logs from EC2, Lambda, and CloudTrail\n4. Dashboards - visualizes resource health with custom graphs and widgets" },
        ],
      },
      {
        no: 77,
        text: "What is AURI in AWS?",
        answer: [
          { heading: "AURI", body: "AURI means All Upfront Reserved Instance. The entire reservation cost is paid at the start of a 1-year or 3-year term, which gives the maximum discount over On-Demand pricing and removes monthly charges after the upfront payment." },
        ],
      },
      {
        no: 80,
        tag: "Exam Q6(c)",
        marks: "1",
        co: "CO3 · Analyze/IOCQ",
        text: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
        answer: [
          { heading: "Answer", body: "CloudFront uses Edge Locations, which are hundreds of locations worldwide that are closer to end users than Regions. CloudFront caches and serves content from the nearest Edge Location." },
        ],
      },
      {
        no: 81,
        text: "AWS services and resources can be accessed by using the _____, _______, and _________.",
        answer: [
          { heading: "AWS Access Methods", body: "AWS services and resources can be accessed using the AWS Management Console, AWS CLI, and AWS SDKs." },
        ],
      },
      {
        no: 82,
        text: "Between Amazon EC2 or Amazon RDS, which provides a managed service? What does managed service mean?",
        answer: [
          { heading: "Managed Service", body: "Amazon RDS provides a managed service. In a managed service, AWS handles hardware, setup, patching, backups, scaling, and failover, while the customer manages schema, queries, and application logic. EC2 requires the customer to manage everything themselves." },
        ],
      },
      {
        no: 83,
        text: "What are the four benefits of Elastic Beanstalk?",
        answer: [
          { heading: "Four Benefits", body: "1. Fast deployment - upload code and AWS provisions infrastructure\n2. No infrastructure management - AWS handles OS, capacity, and patching\n3. Auto Scaling - scales up or down based on demand\n4. Full control retained - you can still access and configure underlying AWS resources" },
        ],
      },
      {
        no: 84,
        text: "How do the internet gateway and Network address translation (NAT) gateway differ from each other?",
        answer: [
          { heading: "Internet Gateway", body: "An Internet Gateway allows inbound and outbound internet traffic and is used by public subnet resources. The instance needs a public IP. Internet-initiated connections are allowed." },
          { heading: "NAT Gateway", body: "A NAT Gateway allows outbound-only internet access for private subnet resources. It has a public IP, but inbound internet-initiated connections are blocked." },
        ],
      },
      {
        no: 85,
        text: "Write four Amazon CloudFront benefits.",
        answer: [
          { heading: "Four Benefits", body: "1. Low latency - serves content from the nearest Edge Location\n2. Security - integrates with AWS WAF, Shield, and HTTPS\n3. Cost savings - reduces origin load and data transfer costs\n4. High availability - globally distributed and auto-scales for traffic spikes" },
        ],
      },
      {
        no: 86,
        text: "What is the speciality of Amazon Elastic File System? Why Amazon Simple Storage Service is called a managed service?",
        answer: [
          { heading: "EFS Specialty", body: "Amazon EFS is a shared file system mountable by thousands of EC2 instances simultaneously. It auto-scales storage, needs no capacity planning, and supports the NFS protocol across multiple AZs." },
          { heading: "S3 as Managed Service", body: "Amazon S3 is a managed service because AWS manages the servers, replication, durability, and patching. There is no server to provision or capacity to pre-allocate, and customers only use the API to store and retrieve objects." },
        ],
      },
      {
        no: 87,
        text: "Fill up the storage requirements table: Enterprise-class relational database / Fast and flexible NoSQL database service for any scale.",
        answer: [
          { heading: "Storage Requirements Table", body: "Enterprise-class relational database - Amazon RDS / Aurora\nFast and flexible NoSQL database service for any scale - Amazon DynamoDB" },
        ],
      },
      {
        no: 89,
        text: "Write if the following CloudWatch alarms are correct. If incorrect, then please rectify it: i) CPU >60% for 5 min  ii) Connections >10 for 1 min  iii) Max bucket size ~3 for 1 day  iv) Healthy hosts <5 for 10 min  v) Read ops >1000 for 10 sec",
        answer: [
          { heading: "Alarm Review", body: "i) CPU > 60% for 5 min - Correct\nii) Connections > 10 for 1 min - Correct\niii) Max bucket size ~3 for 1 day - Incorrect; use the exact bytes value, not ~3\niv) Healthy hosts < 5 for 10 min - Correct\nv) Read ops > 1000 for 10 sec - Incorrect; the minimum period is 1 minute, so change it to 1 min" },
        ],
      },
      {
        no: 96,
        tag: "Exam Q6(d)",
        marks: "2",
        co: "CO3 · Analyze/LOCQ",
        text: "Which of the following services are global instead of Regional? Amazon EC2, IAM, Lambda, and Route 53.",
        answer: [
          { heading: "Global Services", body: "IAM and Route 53 are global services. EC2 and Lambda are regional services." },
        ],
      },
      {
        no: 97,
        text: "Write two uses of AWS CloudTrail.",
        answer: [
          { heading: "Two Uses", body: "1. Security auditing - records all API calls with who, what, when, and where for compliance and unauthorized-access detection\n2. Troubleshooting - reviews configuration change history to diagnose issues before an incident" },
        ],
      },
      {
        no: 98,
        text: "Which is a fully managed NoSQL database service? Write four cases of when to use Amazon RDS.",
        answer: [
          { heading: "Fully Managed NoSQL Service", body: "Amazon DynamoDB is the fully managed NoSQL service." },
          { heading: "When to Use RDS", body: "Use RDS when the application needs complex SQL queries and joins, when migrating an existing relational database such as MySQL or PostgreSQL, when ACID-compliant transactions are required, or when you want automated backups, multi-AZ failover, and read replicas without managing servers." },
        ],
      },
      {
        no: 100,
        tag: "Exam Q6(e)",
        marks: "1",
        co: "CO3 · Analyze/IOCQ",
        text: "Under which service category does the Amazon VPC service appear?",
        answer: [
          { heading: "Answer", body: "Amazon VPC appears under the Networking and Content Delivery service category in AWS." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Module IV",
    subtitle: "Cloud Storage & Security",
    color: "#10b981",
    bg: "#001a10",
    accent: "#34d399",
    topics: "GFS · HDFS · Cloud Security · Data Security · IAM · MFA · Security Groups · Network ACLs · AWS WAF · Cognito · Git · AWS CodeCommit · RDS Pricing · Auto Scaling · CloudWatch Alerts",
    hours: "6L + 5×2P",
    questions: [
      {
        no: 25,
        tag: "Exam Q8(a)",
        marks: "4+4",
        co: "CO4 · Analyze/IOCQ",
        text: "What are the functionalities of Amazon RDS read replicas? Write four cases of when not to use Amazon RDS?",
        answer: [
          {
            heading: "Read Replica Functionalities",
            body: "1. Read-only copy of primary DB using async replication\n2. Offloads read-heavy traffic from primary\n3. Can be in same/different Region or AZ\n4. Can be promoted to standalone DB for disaster recovery\n5. Up to 5 read replicas per primary instance",
          },
          {
            heading: "When NOT to Use RDS",
            body: "1. Need massive NoSQL scale - use DynamoDB\n2. Need OS-level control - use EC2 with custom DB\n3. Need graph database - use Neptune\n4. Need in-memory caching - use ElastiCache",
          },
        ],
      },
      {
        no: 57,
        tag: "Exam Q8(b)",
        marks: "2+2",
        co: "CO4 · Analyze/IOCQ",
        text: "What do you pay for when you use On-Demand Instances of RDS? What is the case for reserved instances?",
        answer: [
          {
            heading: "On-Demand - You Pay For",
            body: "1. DB instance hours (per hour running)\n2. Storage (GB/month)\n3. I/O requests and data transfer",
          },
          {
            heading: "Reserved Instances",
            body: "1. One-time upfront fee for 1 or 3-year term\n2. Up to 69% discount over On-Demand\n3. Best for predictable, steady-state workloads",
          },
        ],
      },
      {
        no: 32,
        tag: "Exam Q9(a)",
        marks: "2+2",
        co: "CO5 · Gain insight/LOCQ",
        text: "Why is auto-scaling important? What is auto-scaling group?",
        answer: [
          {
            heading: "Why Important",
            body: "1. Matches capacity to real-time demand\n2. Prevents over/under-provisioning\n3. Maintains availability during traffic spikes\n4. Saves cost by removing idle instances",
          },
          {
            heading: "Auto Scaling Group",
            body: "1. Logical collection of EC2 instances\n2. Defines min, max, desired instance count\n3. Launches/terminates instances based on CloudWatch alarms\n4. Example: Min=2, Max=10, Desired=4",
          },
        ],
      },
      {
        no: 64,
        tag: "Exam Q9(b)",
        marks: "2",
        co: "CO6 · Apply/LOCQ",
        text: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
        answer: [
          {
            heading: "Answer",
            body: "Amazon SNS (Simple Notification Service) is used to send alerts based on CloudWatch alarms. A CloudWatch alarm triggers an SNS topic, which can send email, SMS, or HTTP notifications. Example: CPU > 80% triggers an alarm, which sends an email to the admin.",
          },
        ],
      },
      {
        no: 90,
        tag: "Exam Q9(c)",
        marks: "4",
        co: "CO6 · Apply/IOCQ",
        text: "What is the difference between scaling up and scaling out?",
        answer: [
          {
            heading: "Scaling Up vs Scaling Out",
            body: "Scale Up (Vertical) means bigger instance size. Downtime is usually required, the limit is the max instance size, and it is best for databases and legacy apps.\n\nScale Out (Horizontal) means adding more instances. Downtime is not required, the limit is virtually unlimited, and it is best for web servers and stateless apps.",
          },
        ],
      },
      {
        no: 99,
        tag: "Exam Q9(d)",
        marks: "4",
        co: "CO6 · Apply/IOCQ",
        text: "Amazon CloudWatch, Amazon EC2 Auto Scaling, and Elastic Load Balancing work well individually. Can you explain the statement with a proper example?",
        answer: [
          {
            heading: "Roles",
            body: "CloudWatch monitors metrics and fires alarms. Auto Scaling adds or removes instances based on those alarms. ELB distributes traffic across healthy instances.",
          },
          {
            heading: "Example",
            body: "1. Sale starts and traffic spikes\n2. CloudWatch detects CPU > 70%\n3. Auto Scaling launches more EC2 instances\n4. ELB routes traffic to the new instances\n5. Sale ends, CPU drops, and Auto Scaling terminates extra instances\n\nResult: automatic performance, cost efficiency, and zero manual work.",
          },
        ],
      },
      {
        no: 27,
        text: "Write three advantages of Google File System. Write four features of Hadoop Distributed File Systems (HDFS). Write two limitations of HDFS.",
        answer: [
          {
            heading: "Three GFS Advantages",
            body: "1. Fault tolerant - auto replicates across chunk servers\n2. High throughput - optimized for large sequential reads/writes\n3. Scalable - handles thousands of machines and petabytes of data",
          },
          {
            heading: "Four HDFS Features",
            body: "1. Files split into 128 MB blocks across DataNodes\n2. Each block replicated 3x by default\n3. NameNode manages metadata; DataNodes store data\n4. Rack-aware - replicas placed on different racks",
          },
          {
            heading: "Two HDFS Limitations",
            body: "1. Poor with small files - exhausts NameNode memory\n2. High latency - not suitable for real-time access",
          },
        ],
      },
      {
        no: 28,
        text: "What is AWS CodeCommit? Who should use it? What is Git?",
        answer: [
          {
            heading: "AWS CodeCommit",
            body: "AWS CodeCommit is a fully managed Git repository service by AWS. It is secure, encrypted, integrates with IAM and CodePipeline, and removes the need to manage your own Git server.",
          },
          {
            heading: "Who Should Use It",
            body: "Teams needing private, secure repos on AWS and developers building CI/CD pipelines within AWS.",
          },
          {
            heading: "Git",
            body: "Git is a distributed version control system. It tracks code changes, supports branching/merging, and gives every developer a full local copy of the repo.",
          },
        ],
      },
      {
        no: 49,
        tag: "Exam Q6(b)",
        marks: "2",
        co: "CO3 · Analyze/IOCQ",
        text: "What does AWS Identity and Access Management (IAM) enable you to do?",
        answer: [
          {
            heading: "What IAM Enables You To Do",
            body: "1. Control who can access AWS resources (authentication)\n2. Control what actions they can perform (authorization)\n3. Create/manage users, groups, roles, and policies\n4. Enable MFA for extra security\n5. Apply least privilege and grant only needed permissions\n6. Provide temporary credentials via roles\n7. Free service with no additional charge",
          },
        ],
      },
      {
        no: 50,
        text: "Define IAM Policy and IAM Role.",
        answer: [
          {
            heading: "IAM Policy",
            body: "An IAM Policy is a JSON document defining allow/deny permissions. It can be attached to users, groups, or roles. Types include Managed (reusable) and Inline (embedded).",
          },
          {
            heading: "IAM Role",
            body: "An IAM Role is an identity with no permanent credentials. It is temporarily assumed by users, services, or apps and is used to give AWS services permissions, such as EC2 accessing S3, through temporary STS credentials.",
          },
        ],
      },
      {
        no: 51,
        text: "Write any four best practices to secure an AWS account.",
        answer: [
          {
            heading: "Four Best Practices to Secure AWS Account",
            body: "1. Enable MFA on root account\n2. Never use root for daily tasks\n3. Apply least privilege\n4. Rotate access keys regularly\n5. Enable CloudTrail for auditing",
          },
        ],
      },
      {
        no: 59,
        text: "What do you understand by Inodes?",
        answer: [
          {
            heading: "Inodes",
            body: "An inode is a data structure storing file metadata, not the file name or file data itself. It stores file size, owner, permissions, timestamps, and pointers to data blocks. Each file has a unique inode number, and the file name is stored in the directory entry and maps to the inode. In HDFS, the NameNode plays a similar metadata role.",
          },
        ],
      },
      {
        no: 60,
        text: "Replication causes data redundancy then why is it still preferred in HDFS?",
        answer: [
          {
            heading: "Why Replication in HDFS Despite Redundancy",
            body: "1. Fault tolerance - data available even if a node fails\n2. High availability - no manual intervention needed on failure\n3. Faster reads - client reads from nearest replica\n4. Rack awareness - survives entire rack failure\n5. Storage cost is cheap; data loss is not acceptable\n\nDefault replication factor = 3",
          },
        ],
      },
      {
        no: 61,
        text: "What does AWS trusted advisor provide?",
        answer: [
          {
            heading: "AWS Trusted Advisor",
            body: "AWS Trusted Advisor provides real-time best practice recommendations across 5 categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. Full checks require a Business or Enterprise Support plan.",
          },
        ],
      },
      {
        no: 88,
        text: "Write three differences between GFS and HDFS.",
        answer: [
          {
            heading: "GFS vs HDFS",
            body: "1. Ownership: GFS is proprietary (Google internal), while HDFS is open-source (Apache).\n2. Block size: GFS uses 64 MB default blocks, while HDFS uses 128 MB default blocks.\n3. Language: GFS is written in C++, while HDFS is written in Java.",
          },
        ],
      },
    ],
  },
];

export function getModule(id: number) {
  return modules.find((m) => m.id === id);
}

export function getTotalStats() {
  const totalQuestions = modules.reduce((sum, module) => sum + module.questions.length, 0);
  const answeredQuestions = modules.reduce(
    (sum, module) => sum + module.questions.filter((question) => Boolean(question.answer?.length)).length,
    0,
  );
  return {
    modules: modules.length,
    totalQuestions,
    answeredQuestions,
    practiceQuestions: totalQuestions - answeredQuestions,
  };
}
