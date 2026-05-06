export type AnswerSection = {
  heading: string;
  body: string;
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
      { no: 9, text: "What is server consolidation?" },
      { no: 10, tag: "Exam Q4(a)", marks: "2", co: "CO2 · Remember/LOCQ", text: "What do you mean by Virtualization in Cloud Computing?" },
      { no: 11, text: "Name three hardware virtualization techniques." },
      { no: 12, text: "What are the security rings and privilege modes of instruction execution? Give a suitable schematic diagram with necessary explanation." },
      { no: 13, text: "Discuss the roles of the following modules of a hypervisor: i) Dispatcher  ii) Allocator  iii) Interpreter" },
      { no: 14, text: "Mention the three criteria established by Goldberg and Popek that must be met by the virtual machine manager to efficiently support virtualization." },
      { no: 15, tag: "Exam Q5(a)", marks: "4", co: "CO2 · Analyse/IOCQ", text: "Discuss the VMware full virtualization architecture. Draw the schematic diagram and give the necessary explanation." },
      { no: 16, text: "Discuss the hardware-assisted virtualization technique." },
      { no: 41, text: "Distinguish between Type I and Type II hypervisors with a suitable schematic diagram and necessary explanation." },
      { no: 42, tag: "Exam Q4(b)", marks: "3", co: "CO2 · Analyse/IOCQ", text: '"Virtualization has a number of advantages, but it also has downsides"—Justify this statement.' },
      { no: 43, text: "What is ISA, ABI, and API with respect to a machine reference model?" },
      { no: 44, text: 'Explain the components "guest", "host", and "virtualization layer" in a virtualized environment.' },
      { no: 45, text: "Discuss the Xen paravirtualization architecture. Draw the schematic diagram and give the necessary explanation." },
      { no: 69, text: "What is a middleware layer? In the Cloud, who uses the middleware layer? Who installs or manages the middleware layer in the Cloud?" },
      { no: 70, text: "What is a SLA? Mention at least three parameters usually specified in a SLA." },
      { no: 73, text: "What do you mean by privileged and nonprivileged instructions?" },
      { no: 74, tag: "Exam Q4(c)", marks: "3+1+1", co: "CO2 · Understand/LOCQ", text: "Explain Full Virtualization. Mention one advantage and one disadvantage of this technique." },
      { no: 75, text: "Explain the technique of Para Virtualization. Clearly mention one advantage and one disadvantage of this technique." },
      { no: 76, text: "Write short notes on the following: i) Memory Virtualization  ii) Operating System level Virtualization" },
      { no: 78, tag: "Exam Q5(c)", marks: "3+3", co: "CO1 · Remember/LOCQ", text: "Write short notes on the following: i) PaaS service model  ii) Network Virtualization  iii) SaaS service model  iv) IDaaS" },
      { no: 95, text: "What is meant by the process-level techniques and system-level techniques in execution virtualization?" },
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
      { no: 17, tag: "Exam Q6(a)", marks: "3×2", co: "CO2 · Remember/LOCQ", text: "Define Regions, Availability Zones, and Edge Locations." },
      { no: 18, text: "The customer uses Amazon S3, VPC, EC2, and Oracle database. Fill up the table: (1) OS upgrades on EC2, (2) Physical security of data center, (3) Virtualization infrastructure, (4) EC2 security group settings, (5) Application configuration on EC2, (6) Oracle patches on RDS, (7) Oracle patches on EC2, (8) S3 bucket access configuration — Who is responsible: AWS or Customer?" },
      { no: 19, text: "Write four responsibilities for each, of the customers and the AWS according to the shared responsibility model." },
      { no: 20, tag: "Exam Q7(a)", marks: "2+5", co: "CO3 · Remember/LOCQ", text: "What is Amazon Machine Image? Write any five key decisions to make when you create an EC2 instance by using the AWS Management Console Launch Instance Wizard." },
      { no: 21, text: "What are the four pillars of cost optimization of Amazon EC2?" },
      { no: 22, text: "Which AWS service helps developers quickly deploy resources that can make use of different programming languages, such as .NET and Java?" },
      { no: 23, text: "How do security groups work? What is a Network Access Control List?" },
      { no: 24, text: "A company wants to store data that is not frequently accessed. What is the best and most cost-effective solution that should be considered?" },
      { no: 26, text: "DynamoDB supports two different kinds of primary keys. What are those and what are their significances?" },
      { no: 29, text: "What are the six pillars of AWS well-architected framework? Explain any three of them." },
      { no: 30, text: "Write any two Amazon Redshift use cases. Write four Amazon Aurora features." },
      { no: 31, text: "Elastic Load Balancing distributes incoming application or network traffic ____________________." },
      { no: 36, tag: "Exam Q3(b)", marks: "1.5+1.5", co: "CO1 · Understand/LOCQ", text: "Differentiate between the horizontal scaling and the vertical scaling policies." },
      { no: 46, text: "What are the three ways of interacting with AWS?" },
      { no: 47, tag: "Exam Q5(b)", marks: "2", co: "CO3 · Analyse/IOCQ", text: '"In AWS, you pay less when you use more"—Justify.' },
      { no: 48, text: "What is meant by the All Upfront, Partial Upfront, and No Upfront reserved instance pricing in AWS?" },
      { no: 52, text: "How to use Amazon CloudWatch in connection with Amazon EC2?" },
      { no: 53, text: "What is Serverless computing? _________ is a serverless compute service that provides ___________." },
      { no: 54, text: "Write three Elastic Block Storage features and four uses." },
      { no: 55, text: "Write any three ways Amazon Route 53 enables you to improve the availability of your applications that run on AWS." },
      { no: 56, text: "Name a data archiving service provided by AWS. Explain the terms archive, vault and vault access policy." },
      { no: 58, text: "DynamoDB runs exclusively on _______." },
      { no: 62, text: "Name three different load balancers. Fill up the table: containerized app traffic / spiky TCP / simple multi-protocol / static IP or IP target outside VPC / millions of requests with low latency / HTTPS requests." },
      { no: 63, text: "How is Amazon CloudWatch used? Mention the four uses." },
      { no: 77, text: "What is AURI in AWS?" },
      { no: 80, tag: "Exam Q6(c)", marks: "1", co: "CO3 · Analyze/IOCQ", text: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?" },
      { no: 81, text: "AWS services and resources can be accessed by using the _____, _______, and _________." },
      { no: 82, text: "Between Amazon EC2 or Amazon RDS, which provides a managed service? What does managed service mean?" },
      { no: 83, text: "What are the four benefits of Elastic Beanstalk?" },
      { no: 84, text: "How do the internet gateway and Network address translation (NAT) gateway differ from each other?" },
      { no: 85, text: "Write four Amazon CloudFront benefits." },
      { no: 86, text: "What is the speciality of Amazon Elastic File System? Why Amazon Simple Storage Service is called a managed service?" },
      { no: 87, text: "Fill up the storage requirements table: Enterprise-class relational database / Fast and flexible NoSQL database service for any scale." },
      { no: 89, text: "Write if the following CloudWatch alarms are correct. If incorrect, then please rectify it: i) CPU >60% for 5 min  ii) Connections >10 for 1 min  iii) Max bucket size ~3 for 1 day  iv) Healthy hosts <5 for 10 min  v) Read ops >1000 for 10 sec" },
      { no: 96, tag: "Exam Q6(d)", marks: "2", co: "CO3 · Analyze/LOCQ", text: "Which of the following services are global instead of Regional? Amazon EC2, IAM, Lambda, and Route 53." },
      { no: 97, text: "Write two uses of AWS CloudTrail." },
      { no: 98, text: "Which is a fully managed NoSQL database service? Write four cases of when to use Amazon RDS." },
      { no: 100, tag: "Exam Q6(e)", marks: "1", co: "CO3 · Analyze/IOCQ", text: "Under which service category does the Amazon VPC service appear?" },
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
      { no: 25, tag: "Exam Q8(a)", marks: "4+4", co: "CO4 · Analyze/IOCQ", text: "What are the functionalities of Amazon RDS read replicas? Write four cases of when not to use Amazon RDS?" },
      { no: 57, tag: "Exam Q8(b)", marks: "2+2", co: "CO4 · Analyze/IOCQ", text: "What do you pay for when you use On-Demand Instances of RDS? What is the case for reserved instances?" },
      { no: 32, tag: "Exam Q9(a)", marks: "2+2", co: "CO5 · Gain insight/LOCQ", text: "Why is auto-scaling important? What is auto-scaling group?" },
      { no: 64, tag: "Exam Q9(b)", marks: "2", co: "CO6 · Apply/LOCQ", text: "Which service would you use to send alerts based on Amazon CloudWatch alarms?" },
      { no: 90, tag: "Exam Q9(c)", marks: "4", co: "CO6 · Apply/IOCQ", text: "What is the difference between scaling up and scaling out?" },
      { no: 99, tag: "Exam Q9(d)", marks: "4", co: "CO6 · Apply/IOCQ", text: "Amazon CloudWatch, Amazon EC2 Auto Scaling, and Elastic Load Balancing work well individually. Can you explain the statement with a proper example?" },
      { no: 27, text: "Write three advantages of Google File System. Write four features of Hadoop Distributed File Systems (HDFS). Write two limitations of HDFS." },
      { no: 28, text: "What is AWS CodeCommit? Who should use it? What is Git?" },
      { no: 49, tag: "Exam Q6(b)", marks: "2", co: "CO3 · Analyze/IOCQ", text: "What does AWS Identity and Access Management (IAM) enable you to do?" },
      { no: 50, text: "Define IAM Policy and IAM Role." },
      { no: 51, text: "Write any four best practices to secure an AWS account." },
      { no: 59, text: "What do you understand by Inodes?" },
      { no: 60, text: "Replication causes data redundancy then why is it still preferred in HDFS?" },
      { no: 61, text: "What does AWS trusted advisor provide?" },
      { no: 88, text: "Write three differences between GFS and HDFS." },
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
