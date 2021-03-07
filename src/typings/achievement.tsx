import { Languages } from './global';

export interface Achievement {
    id: string;
    order: number;
    name: Languages;
    description: Languages;
    reward: string | number;
    progress: string;
    version: string;
}

export interface AchievementTitle {
    name: Languages;
    icon: string;
    index: string;
    achievements: Achievement[];
}

export interface BookProps {
    listAchievements: Achievement[];
    listAchievementsFull: Achievement[];
    setListAchievements: (listAchievements: Achievement[]) => void;
    achievementCategory: number;
    listAchievementsClear: any[];
    setListAchievementsClear: (listAchievementsClear: any[]) => void;
}

export interface BookRowProps {
    item: Achievement;
    achievementCategory: number;
    setRowActive: (index: string | null) => void;
    rowActive: string | null;
    listAchievementsClear: any[];
    setListAchievementsClear: (listAchievementsClear: any[]) => void;
}

export interface AchievementCategoryProps {
    achievementTab: AchievementTitle[];
}

export interface AchievementCategoryTitleProps {
    index: number;
    achievementTitle: AchievementTitle;
}

export interface FilterAchievementProps {
    filterListAchievements: (
        version: string | null,
        statut: string | null,
        search: string | null
    ) => Achievement[];
    setListAchievements: (listAchievements: Achievement[]) => void;
}
