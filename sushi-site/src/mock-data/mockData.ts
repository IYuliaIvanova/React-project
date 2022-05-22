interface IDataReviews {
  name: string;
  text: string;
  id: number;
}

export const dataReviews: IDataReviews[] = [
  {
    name: "Розалия",
    text: "Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне",
    id: 1
  },
  {
    name: "Елена",
    text: "Ооочень вкусно!!!!!",
    id: 2
  },
  {
    name: "Сергей Гаврилюк",
    text: "Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )",
    id: 3
  },
];

export interface IDataOrdering {
  phone: string,
  name: string,
  cash?: boolean,
  card?: boolean,
  sum?: number,
  sticks: number,
  souse: number,
  promo?: string,
  courier?: boolean,
  pickup?: boolean,
  street?: string,
  house?: number,
  apartment?: number,
  floor?: number,
  code?: number,
  email?: string,
}