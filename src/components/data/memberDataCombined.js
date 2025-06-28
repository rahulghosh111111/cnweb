// Combined member data of all years
import memberData2025 from './memberData2025';
import memberData2026 from './memberData2026';

export const memberDataByYear = {
  2025: memberData2025,
  2026: memberData2026,
};

// Default year
export const currentYear = 2025;

// default years
export const leadershipData = memberData2025.leadership;
export const domainsData = memberData2025.domains;

export default memberDataByYear;
