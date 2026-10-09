import { Bell, Calendar, ListChecks } from "@tamagui/lucide-icons-2";
import {
  Card,
  ColorTokens,
  H2,
  H3,
  Paragraph,
  Text,
  XStack,
  YStack,
} from "tamagui";

interface DashboardCardProps {
  title: string;
  count: number;
  label: string;
  subtitle: string;
  icon: any;
  subColor: ColorTokens;
  numberColor?: ColorTokens;
}

const cardsData: DashboardCardProps[] = [
  {
    title: "Tasks",
    count: 11,
    label: "pend",
    subtitle: "3 overdue",
    icon: ListChecks,
    subColor: "$red9",
  },
  {
    title: "Schedules",
    count: 4,
    label: "today",
    subtitle: "9 upcoming",
    icon: Calendar,
    subColor: "$color10",
  },
  {
    title: "Alerts",
    count: 4,
    label: "due",
    subtitle: "14 pending",
    icon: Bell,
    subColor: "$color10",
    numberColor: "$red9",
  },
];

export default function MetricCards() {
  return (
    <YStack flex={1} bg="$background" p="$4" justify="center">
      <XStack gap="$3" width="100%">
        {cardsData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <Card
              key={index}
              flex={1}
              flexBasis={0}
              minWidth={0}
              p="$3.5"
              borderRadius="$5"
              borderWidth={1}
              borderColor="$borderColor"
              bg="$color2"
              justify="space-between"
              height={140}
              hoverStyle={{ borderColor: "$borderColorFocus" }}
            >
              <XStack justify="space-between" items="center">
                <H2
                  size="$2"
                  color="$color11"
                  fontWeight="600"
                  numberOfLines={1}
                >
                  {item.title}
                </H2>
                <IconComponent size={16} color="$color11" />
              </XStack>

              <XStack items="baseline" gap="$1.5" my="$1">
                <H3
                  size="$8"
                  fontWeight="800"
                  color={item.numberColor || "$color12"}
                  lineHeight="$8"
                >
                  {item.count}
                </H3>
                <Paragraph size="$1" color="$color10" fontWeight="500">
                  {item.label}
                </Paragraph>
              </XStack>

              <Text
                fontSize="$1"
                fontWeight="500"
                color={item.subColor}
                numberOfLines={1}
              >
                {item.subtitle}
              </Text>
            </Card>
          );
        })}
      </XStack>
    </YStack>
  );
}
