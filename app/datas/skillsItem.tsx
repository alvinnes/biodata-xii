import {
  ActivityIcon,
  ArrowRightLeftIcon,
  BoxIcon,
  BriefcaseIcon,
  CableIcon,
  CodeXmlIcon,
  ContainerIcon,
  CpuIcon,
  DatabaseIcon,
  FoldersIcon,
  FolderTreeIcon,
  GitBranchIcon,
  GitMergeIcon,
  GlobeIcon,
  HardDriveIcon,
  KeyIcon,
  LayersIcon,
  LayoutIcon,
  LayoutTemplateIcon,
  LockIcon,
  MailIcon,
  MapIcon,
  MonitorUpIcon,
  NetworkIcon,
  RepeatIcon,
  RouteIcon,
  RouterIcon,
  ScaleIcon,
  ServerCogIcon,
  ServerIcon,
  SettingsIcon,
  Share2Icon,
  ShieldCheckIcon,
  ShieldIcon,
  TerminalIcon,
  TerminalSquareIcon,
  UsersIcon,
  WaypointsIcon,
  WorkflowIcon,
  WrenchIcon,
} from "lucide-react";

const skillsItem = [
  {
    category: "Linux Administrator",
    skill: [
      {
        title: "DHCP (Dynamic Host Configuration Protocol) Server",
        tech: "ISC DHCP Server & Kea",
        icon: <NetworkIcon />,
      },
      {
        title: "DNS (Domain Name System)",
        tech: "Bind9",
        icon: <GlobeIcon />,
      },
      {
        title: "Load Balancer",
        tech: "HAProxy",
        icon: <ScaleIcon />,
      },
      {
        title: "Reverse Proxy",
        tech: "Nginx",
        icon: <WaypointsIcon />,
      },
      {
        title: "Web Server",
        tech: "Apache & Nginx",
        icon: <LayoutTemplateIcon />,
      },
      {
        title: "VPN (Virtual Private Network)",
        tech: "Wireguard, OpenVPN, Xl2tpd",
        icon: <CableIcon />,
      },
      {
        title: "Firewall",
        tech: "IPTables & NFTables",
        icon: <ShieldIcon />,
      },
      {
        title: "Mail Server",
        tech: "Postfix, Dovecot, Roundcube / Thunderbird",
        icon: <MailIcon />,
      },
      {
        title: "Remote Server",
        tech: "SSH (Secure Shell)",
        icon: <TerminalIcon />,
      },
      {
        title: "Security",
        tech: "CA / OpenSSL",
        icon: <LockIcon />,
      },
      {
        title: "Database Server",
        tech: "MariaDB / MySQL",
        icon: <DatabaseIcon />,
      },
      {
        title: "File & Storage",
        tech: "Samba, ProFTPD",
        icon: <HardDriveIcon />,
      },
      {
        title: "Containerization",
        tech: "Docker & Docker Compose",
        icon: <BoxIcon />,
      },
    ],
  },
  {
    category: "Cisco Packet Tracer",
    skill: [
      {
        title: "Basic Device Configuration",
        tech: "Hostname, Timezone, User Management, Password & Privilege, Domain & IP Address",
        icon: <SettingsIcon />,
      },
      {
        title: "VLAN Trunking Protocol (VTP)",
        tech: "VTP Domain, VTP Password, & VTP Mode Configuration",
        icon: <Share2Icon />,
      },
      {
        title: "VLAN Management",
        tech: "Membuat dan mengelola Virtual LAN (VLAN) pada Switch",
        icon: <LayersIcon />,
      },
      {
        title: "Switchport Configuration",
        tech: "Konfigurasi Access Ports & Trunk Ports",
        icon: <ArrowRightLeftIcon />,
      },
      {
        title: "Spanning Tree Protocol (STP)",
        tech: "Konfigurasi STP untuk mencegah *looping* pada jaringan Layer 2",
        icon: <GitMergeIcon />,
      },
      {
        title: "EtherChannel (Link Aggregation)",
        tech: "Konfigurasi PAgP, LACP, dan Manual/On Method",
        icon: <CableIcon />,
      },
      {
        title: "Hot Standby Router Protocol (HSRP)",
        tech: "Konfigurasi Gateway Redundancy (Active/Standby Router)",
        icon: <RepeatIcon />,
      },
      {
        title: "Dynamic Routing",
        tech: "Konfigurasi protokol routing OSPF, EIGRP, BGP, dan RIP",
        icon: <RouteIcon />,
      },
      {
        title: "DHCP Server Configuration",
        tech: "Konfigurasi DHCP Pool langsung dari Cisco IOS",
        icon: <DatabaseIcon />,
      },
      {
        title: "Remote Administration",
        tech: "Konfigurasi SSH & Crypto Key (RSA) untuk *remote access*",
        icon: <TerminalIcon />,
      },
      {
        title: "Network Security",
        tech: "Konfigurasi Access Control List (ACL) & Port Security",
        icon: <ShieldCheckIcon />,
      },
    ],
  },
  {
    category: "Windows Server",
    skill: [
      {
        title: "Active Directory Domain Services (AD DS)",
        tech: "Konfigurasi Active Directory, termasuk pembuatan Forest baru dan domain utama",
        icon: <NetworkIcon />,
      },
      {
        title: "AD Sites and Services",
        tech: "Manajemen default site name, penentuan subnet, dan alokasi akses VM/PC ke site tertentu",
        icon: <MapIcon />,
      },
      {
        title: "OU & Bulk User Management",
        tech: "Manajemen Organizational Unit (OU) & pembuatan >100 user otomatis menggunakan scripting (PowerShell/Shell)",
        icon: <UsersIcon />,
      },
      {
        title: "Client Domain Integration",
        tech: "Konfigurasi join domain untuk mengintegrasikan VM/PC client ke dalam domain AD",
        icon: <MonitorUpIcon />,
      },
      {
        title: "Group Policy Object (GPO)",
        tech: "Manajemen policy terpusat (contoh: kustomisasi dan mematikan animasi startup Windows client)",
        icon: <BriefcaseIcon />,
      },
      {
        title: "Child Domain",
        tech: "Konfigurasi dan manajemen Child Domain untuk memperluas struktur Active Directory",
        icon: <GitBranchIcon />,
      },
      {
        title: "DNS Server",
        tech: "Konfigurasi Domain Name System untuk resolusi nama di dalam ekosistem domain",
        icon: <GlobeIcon />,
      },
      {
        title: "DHCP Server",
        tech: "Konfigurasi dan manajemen alokasi IP Address dinamis untuk client",
        icon: <DatabaseIcon />,
      },
      {
        title: "IIS Web Server",
        tech: "Hosting website dengan protokol aman (HTTPS) dan implementasi Web Authentication",
        icon: <LayoutTemplateIcon />,
      },
      {
        title: "File Server & FSRM",
        tech: "Konfigurasi Shared Folder dan manajemen kuota/tipe file menggunakan File Server Resource Manager",
        icon: <FolderTreeIcon />,
      },
      {
        title: "Distributed File System (DFS)",
        tech: "Konfigurasi DFS untuk sinkronisasi dan manajemen file sharing secara terdistribusi",
        icon: <FoldersIcon />,
      },
      {
        title: "Routing & Remote Access (RRAS)",
        tech: "Konfigurasi VPN (Virtual Private Network) dan routing server",
        icon: <RouterIcon />,
      },
      {
        title: "Active Directory Certificate Services (AD CS)",
        tech: "Konfigurasi Certificate Authority (CA) untuk menghasilkan dan mengelola file CA/Sertifikat",
        icon: <KeyIcon />,
      },
    ],
  },
  {
    category: "Web & IoT Development",
    skill: [
      {
        title: "IoT Hardware & Sensor Integration",
        tech: "Merangkai (wiring) perangkat IoT fisik dan mengintegrasikan mikrokontroler dengan berbagai sensor (seperti sensor suhu dan kelembapan)",
        icon: <CpuIcon />,
      },
      {
        title: "Microcontroller Programming",
        tech: "Menulis, mengompilasi, dan mem-flash kode program ke perangkat IoT menggunakan Arduino IDE",
        icon: <TerminalSquareIcon />,
      },
      {
        title: "Modern Frontend Development",
        tech: "Membangun antarmuka website yang interaktif dan responsif menggunakan HTML, CSS, JavaScript, Tailwind CSS, React.js, dan Next.js",
        icon: <LayoutIcon />,
      },
      {
        title: "Frontend Logic & State Management",
        tech: "Penerapan konsep Context Management, form input validation, dan alur data dinamis pada sisi client",
        icon: <WorkflowIcon />,
      },
      {
        title: "Backend & RESTful API",
        tech: "Mengembangkan sisi server dan merancang API menggunakan framework Express.js (Node.js) atau Laravel (PHP)",
        icon: <ServerCogIcon />,
      },
      {
        title: "Database Management",
        tech: "Manajemen data dan relasi menggunakan sistem database relasional MySQL dan MariaDB",
        icon: <DatabaseIcon />,
      },
      {
        title: "Fullstack System Integration",
        tech: "Menghubungkan ekosistem Frontend, Backend, dan Database secara *end-to-end*",
        icon: <NetworkIcon />,
      },
      {
        title: "CRUD Application Development",
        tech: "Membangun sistem aplikasi utuh (Create, Read, Update, Delete) dari nol menggunakan Next.js maupun Laravel",
        icon: <LayersIcon />,
      },
    ],
  },
  {
    category: "DevOps & Automation",
    skill: [
      {
        title: "Configuration Management",
        tech: "Otomatisasi konfigurasi server Linux (Debian) dan Windows Server secara terpusat menggunakan Ansible",
        icon: <WrenchIcon />,
      },
      {
        title: "Infrastructure as Code (IaC)",
        tech: "Penulisan dan eksekusi Ansible Playbook (YAML) untuk provisioning layanan seperti DNS, Web Server (Nginx), dan manajemen User/Folder",
        icon: <CodeXmlIcon />,
      },
      {
        title: "Virtualization & Hypervisor",
        tech: "Deployment dan manajemen Virtual Machine (VM) serta pemantauan resource server menggunakan Proxmox VE",
        icon: <ServerIcon />,
      },
      {
        title: "Containerization",
        tech: "Isolasi lingkungan (environment) aplikasi dan deployment website menggunakan ekosistem Docker",
        icon: <ContainerIcon />,
      },
      {
        title: "Server Health & Resource Monitoring",
        tech: "Monitoring berkala pada performa resource server (CPU, RAM, Storage, dan Traffic) untuk menjaga kestabilan sistem",
        icon: <ActivityIcon />,
      },
    ],
  },
];

export default skillsItem;
