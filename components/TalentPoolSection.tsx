"use client";

import {
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, DatePicker, Input, Select, Space, Table, Tag } from "antd";
import type { TableColumnsType } from "antd";
import type { Dayjs } from "dayjs";
import { ReloadOutlined } from "@ant-design/icons";

const tagColors: Record<string, string> = {
  "Product Leadership": "geekblue",
  "Revenue Ops": "purple",
  "Data Science": "green",
  "People Ops": "gold",
};

export type CandidateRecord = {
  key: string;
  name: string;
  email: string;
  location: string;
  recentActivity: string;
  lastActivityDate: string;
  recentExperience: string;
  totalExperience: string;
  experienceYears: number;
  education: string;
  educationLevel: "Undergrad" | "Graduate";
  tag: keyof typeof tagColors;
  linkedin: string;
  status: "Contacted" | "Warm" | "To Reach";
  reviewed: boolean;
};

const statusColors: Record<CandidateRecord["status"], string> = {
  Contacted: "blue",
  Warm: "green",
  "To Reach": "magenta",
};

const columns: TableColumnsType<CandidateRecord> = [
  {
    title: "Candidate",
    dataIndex: "name",
    key: "candidate",
    width: 160,
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (_, record) => (
      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 600, fontSize: "0.65rem" }} noWrap>
          {record.name}
        </Typography>
        <Typography sx={{ color: "text.secondary", fontSize: "0.6rem" }} noWrap>
          {record.email}
        </Typography>
      </Box>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Recent Activity",
    dataIndex: "recentActivity",
    key: "recentActivity",
    width: 130,
    render: (activity: string) => (
      <Typography
        sx={{ fontSize: "0.65rem", color: "text.secondary", maxWidth: 140 }}
        noWrap
      >
        {activity}
      </Typography>
    ),
  },
  {
    title: "Recent Experience",
    dataIndex: "recentExperience",
    key: "recentExperience",
    width: 160,
    render: (experience: string) => (
      <Typography sx={{ fontSize: "0.65rem", maxWidth: 150 }} noWrap>
        {experience}
      </Typography>
    ),
  },
  {
    title: "Total Experience",
    dataIndex: "totalExperience",
    key: "totalExperience",
    width: 80,
  },
  {
    title: "Education",
    dataIndex: "education",
    key: "education",
    width: 150,
    render: (education: string) => (
      <Typography sx={{ fontSize: "0.65rem", maxWidth: 140 }} noWrap>
        {education}
      </Typography>
    ),
  },
  {
    title: "Tag",
    dataIndex: "tag",
    key: "tag",
    width: 70,
    render: (tag: CandidateRecord["tag"]) => (
      <Tag color={tagColors[tag]}>{tag}</Tag>
    ),
  },
  {
    title: "LinkedIn",
    dataIndex: "linkedin",
    key: "linkedin",
    width: 50,
    align: "center",
    render: (linkedin: string) => (
      <Tooltip title="Open LinkedIn profile">
        <IconButton
          component="a"
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          size="small"
        >
          <LinkedInIcon fontSize="small" sx={{ color: "#0a66c2" }} />
        </IconButton>
      </Tooltip>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 90,
    render: (status: CandidateRecord["status"]) => (
      <Tag color={statusColors[status]}>{status}</Tag>
    ),
  },
  {
    title: "Review",
    dataIndex: "reviewed",
    key: "review",
    width: 60,
    align: "center",
    render: (reviewed: boolean) => (
      <RateReviewIcon
        htmlColor={reviewed ? "#0b1528" : undefined}
        color={reviewed ? undefined : "disabled"}
        fontSize="small"
      />
    ),
  },
];

const dataSource: CandidateRecord[] = [
  {
    key: "1",
    name: "Leah Park",
    email: "leah.park@northstar.io",
    location: "Seoul, KR",
    recentActivity: "Reply sent · 2d ago",
    lastActivityDate: "2024-07-12",
    recentExperience: "HelixSoft · Group Product Manager",
    totalExperience: "8 yrs",
    experienceYears: 8,
    education: "MBA, Sungkyunkwan",
    educationLevel: "Graduate",
    tag: "Product Leadership",
    linkedin: "https://www.linkedin.com/in/leah-park",
    status: "Contacted",
    reviewed: true,
  },
  {
    key: "2",
    name: "Michael Grant",
    email: "m.grant@revzen.com",
    location: "Austin, TX",
    recentActivity: "Reply sent · 5d ago",
    lastActivityDate: "2024-07-09",
    recentExperience: "RevZen · Head of Revenue Ops",
    totalExperience: "3 yrs",
    experienceYears: 3,
    education: "BBA, UT Austin",
    educationLevel: "Undergrad",
    tag: "Revenue Ops",
    linkedin: "https://www.linkedin.com/in/michael-grant",
    status: "Contacted",
    reviewed: true,
  },
  {
    key: "3",
    name: "Dilshod Akhmedov",
    email: "d.akhmedov@dataqub.uz",
    location: "Tashkent, UZ",
    recentActivity: "Reply sent · 3d ago",
    lastActivityDate: "2024-07-07",
    recentExperience: "DataQub · Principal Data Scientist",
    totalExperience: "6 yrs",
    experienceYears: 6,
    education: "MS Applied Math, TUIT",
    educationLevel: "Graduate",
    tag: "Data Science",
    linkedin: "https://www.linkedin.com/in/dilshod-akhmedov",
    status: "Contacted",
    reviewed: false,
  },
  {
    key: "4",
    name: "Jonas Richter",
    email: "jonas.richter@workflux.de",
    location: "Berlin, DE",
    recentActivity: "Follow-up sent · today",
    lastActivityDate: "2024-07-14",
    recentExperience: "Workflux · Director of Talent",
    totalExperience: "1 yrs",
    experienceYears: 1,
    education: "MA HR, Freie Universität",
    educationLevel: "Graduate",
    tag: "People Ops",
    linkedin: "https://www.linkedin.com/in/jonas-richter",
    status: "Contacted",
    reviewed: true,
  },
  {
    key: "5",
    name: "Sara Kim",
    email: "sara.kim@automationx.io",
    location: "Toronto, CA",
    recentActivity: "Reply sent · 1d ago",
    lastActivityDate: "2024-07-13",
    recentExperience: "AutomationX · VP Revenue Ops",
    totalExperience: "4 yrs",
    experienceYears: 4,
    education: "MBA, Rotman",
    educationLevel: "Graduate",
    tag: "Revenue Ops",
    linkedin: "https://www.linkedin.com/in/sara-kim",
    status: "Contacted",
    reviewed: false,
  },
];

export default function TalentPoolSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [experienceFilter, setExperienceFilter] = useState<string | null>(null);
  const [educationFilter, setEducationFilter] = useState<string | null>(null);
  const [activityFilter, setActivityFilter] = useState<Dayjs | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  const filteredData = useMemo(() => {
    return dataSource.filter((record) => {
      const matchesSearch = `${record.name} ${record.email}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesExperience = experienceFilter
        ? experienceFilter === "10+"
          ? record.experienceYears >= 10
          : experienceFilter === "5-9"
            ? record.experienceYears >= 5 && record.experienceYears <= 9
            : record.experienceYears <= 4
        : true;

      const matchesEducation = educationFilter
        ? record.educationLevel === educationFilter
        : true;

      const matchesActivity = activityFilter
        ? new Date(record.lastActivityDate) >= activityFilter.toDate()
        : true;

      return matchesSearch && matchesExperience && matchesEducation && matchesActivity;
    });
  }, [searchQuery, experienceFilter, educationFilter, activityFilter]);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#fff",
        py: { xs: 8, md: 0 },
        px: { xs: 3, md: 0 },
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 12 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2.4rem",
                sm: "2.8rem",
                md: "3.2rem",
                lg: "2.6rem",
              },
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#0b1528",
            }}
          >
            Talent pool exclusive to our company
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: { xs: "1.2rem", md: "1.4rem" },
              color: "#4a5568",
              fontWeight: 500,
              maxWidth: 560,
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Build a list of qualified candidates in advance and stay in touch with them.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", md: "1200px" },
            maxWidth: "100%",
            mx: "auto",
            bgcolor: "#f4f4f5",
            border: "1px solid rgba(59, 130, 246, 0.15)",
            boxShadow: `
              0 10px 15px -3px rgba(15, 23, 42, 0.08),
              0 25px 50px -12px rgba(15, 23, 42, 0.12),
              0 0 0 1px rgba(255,255,255, 0.6) inset,
              0 4px 6px -1px rgba(59, 130, 246, 0.12)
            `,
            p: { xs: 2, md: 3 },
            borderRadius: 5,
            overflowX: "hidden",
            "& .ant-table-wrapper": {
              borderRadius: 0,
            },
            "& .ant-table-container": {
              borderRadius: 0,
            },
            "& .ant-table": {
              borderRadius: 0,
            },
            "& .ant-table-thead > tr > th": {
              backgroundColor: "#f8fafc",
              fontWeight: 600,
              color: "#0f172a",
              padding: "4px 5px",
              fontSize: "0.65rem",
              whiteSpace: "nowrap",
            },
            "& .ant-table-cell": {
              padding: "4px 5px",
              fontSize: "0.65rem",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            },
          }}
        >
          <Typography
            component="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 600,
              mb: 0.5,
              letterSpacing: "-0.01em",
            }}
          >
            Talent pool management at a glance
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 560,
              mb: 3,
              fontSize: "0.95rem",
            }}
          >
            Keep a curated bench warm with current touchpoints, readiness signals, and pipeline stage tracking.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mb: 2.5,
              alignItems: { xs: "stretch", md: "center" },
            }}
          >
            <Input.Search
              placeholder="Search candidates or emails"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              allowClear
              size="middle"
              style={{ width: "100%", maxWidth: 280 }}
            />
            <Space size="small" wrap>
              <DatePicker
                allowClear
                onChange={(day) => setActivityFilter(day)}
                placeholder="Activity since"
                size="middle"
                style={{ minWidth: 140 }}
              />
              <Select
                allowClear
                placeholder="Years of experience"
                size="middle"
                style={{ width: 160 }}
                value={experienceFilter ?? undefined}
                onChange={(value) =>
                  setExperienceFilter((value as string | undefined) ?? null)
                }
                options={[
                  { label: "0-4 years", value: "0-4" },
                  { label: "5-9 years", value: "5-9" },
                  { label: "10+ years", value: "10+" },
                ]}
              />
              <Select
                allowClear
                placeholder="Education level"
                size="middle"
                style={{ width: 160 }}
                value={educationFilter ?? undefined}
                onChange={(value) =>
                  setEducationFilter((value as string | undefined) ?? null)
                }
                options={[
                  { label: "Undergraduate", value: "Undergrad" },
                  { label: "Graduate", value: "Graduate" },
                ]}
              />
              <Button
                icon={<ReloadOutlined spin={isRefreshing} />}
                size="middle"
                onClick={handleRefresh}
              >
                Refresh
              </Button>
            </Space>
          </Box>
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={false}
            size="small"
            bordered
            rowKey="key"
          />
        </Box>
      </Container>
    </Box>
  );
}
