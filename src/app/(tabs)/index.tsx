import { Bell, Calendar, Circle, ListChecks } from "@tamagui/lucide-icons-2";
import {
  Card,
  ColorTokens,
  GetThemeValueForKey,
  H2,
  H3,
  Paragraph,
  Progress,
  ScrollView,
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

interface CategorieDataProps {
  color: GetThemeValueForKey<"color">;
  task: number;
  sch: number;
  title: string;
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

const categorieData: CategorieDataProps[] = [
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Core Backend",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Mobile App UX",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "DevOps & Cloud",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Product & Sync",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Product & Sync",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Product & Sync",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Product & Sync",
  },
  {
    color: "blue",
    sch: 10,
    task: 5,
    title: "Product & Sync",
  },
];

export default function MetricCards() {
  const percentage = 63;
  return (
    <YStack flex={1} bg="$background" p="$4" justify="center">
      <XStack gap="$1.5" width="100%">
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
      <XStack mt={5}>
        <Card
          flex={1}
          flexBasis={0}
          minWidth={0}
          p="$3.5"
          borderRadius="$5"
          borderWidth={1}
          borderColor="$borderColor"
          bg="$color2"
          justify="space-between"
          height={110}
          hoverStyle={{ borderColor: "$borderColorFocus" }}
        >
          <XStack justify="space-between" items="flex-start">
            <YStack gap="$0.5" flex={1} pr="$2">
              <H2 size="$2" color="$color12" fontWeight="700" numberOfLines={1}>
                Task Completion Rate
              </H2>
              <Paragraph size="$1" color="$color10" numberOfLines={1}>
                24 done of 38 total tasks
              </Paragraph>
            </YStack>

            <YStack p="$1.5" bg="$color3" items="center" justify="center">
              <ListChecks size={16} color="$color11" />
            </YStack>
          </XStack>

          <YStack my="$1.5">
            <Progress value={percentage} size="$2" bg="$color4">
              <Progress.Indicator bg="$blue9" />
            </Progress>
          </YStack>

          <XStack justify="space-between" items="center">
            <Text fontSize="$1" fontWeight="700" color="$blue10">
              {percentage}% Complete
            </Text>
            <Text fontSize="$1" fontWeight="500" color="$color10">
              Pending:{" "}
              <Text color="$color11" fontWeight="600">
                14
              </Text>
            </Text>
          </XStack>
        </Card>
      </XStack>
      <YStack gap="$1" width="100%">
        <XStack justify="space-between" items="center" px="$1" mt={3}>
          <Text
            fontSize="$2"
            color="$color12"
            fontWeight="700"
            letterSpacing={0.2}
          >
            Categories
          </Text>
          <Text fontSize="$1" color="$color10" fontWeight="600">
            {categorieData.length} Total
          </Text>
        </XStack>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingInline: 2,
          }}
        >
          <XStack gap="$2.5">
            {categorieData.map((item, index) => (
              <Card
                key={index}
                width={160}
                px="$3.5"
                py="$2.5"
                borderRadius={18}
                borderWidth={1}
                borderColor="$borderColor"
                bg="$color2"
                justify="center"
                pressStyle={{ scale: 0.98, opacity: 0.9 }}
                hoverStyle={{ borderColor: "$borderColorFocus" }}
                cursor="pointer"
              >
                <YStack gap="$1.5">
                  <XStack items="center" gap="$2">
                    <Circle size={8} bg={item.color} />
                    <H3
                      size="$2"
                      color="$color12"
                      fontWeight="700"
                      numberOfLines={1}
                    >
                      {item.title}
                    </H3>
                  </XStack>

                  <Paragraph
                    size="$1"
                    color="$color10"
                    fontFamily="$body"
                    fontWeight="500"
                    numberOfLines={1}
                    opacity={0.85}
                  >
                    {item.task} tasks • {item.sch} sch
                  </Paragraph>
                </YStack>
              </Card>
            ))}
          </XStack>
        </ScrollView>
      </YStack>
    </YStack>
  );
}
