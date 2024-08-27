import { BASE_URL } from '@/constants/api'
import { http, HttpResponse } from 'msw'

export const orderHandlers = [
  http.get(`${BASE_URL}/order/pending`, () => {
    return HttpResponse.json({
      response: {
        orderId: 1,
        orderTime: '2024-08-24 09:15',
        orderStatus: 'pending',
        orderPrice: 35500,
        store: {
          storeId: 2,
          storeName: '홍길동 한식당',
          storeAddress: {
            latitude: 37.5665,
            longitude: 126.978,
            address: '서울시 블라',
            addressDetail: '몇동 몇호',
            zipCode: '12345',
          },
        },
        menus: [
          {
            menuId: 2,
            menuName: '치킨',
            menuCount: 1,
            optionGroup: [
              {
                optionGroupId: 2,
                optionGroupName: '야채',
                option: [
                  {
                    optionId: 2,
                    optionName: '파 추가',
                  },
                ],
              },
            ],
          },
          {
            menuId: 3,
            menuName: '치킨무',
            menuCount: 1,
            optionGroup: [
              {
                optionGroupId: 3,
                optionGroupName: '야채',
                option: [
                  {
                    optionId: 4,
                    optionName: '파 추가',
                  },
                ],
              },
            ],
          },
        ],
        address: {
          latitude: 37.5667,
          longitude: 126.98,
          address: '서울시 블라',
          addressDetail: '몇동 몇호',
          zipCode: '12345',
        },
      },
      statusCode: 200,
      msg: 'success',
    })
  }),
  http.get(`${BASE_URL}/order/accepted`, () => {
    return HttpResponse.json({
      response: {
        orderId: 1,
        orderTime: '2024-08-24 09:15',
        orderStatus: 'accepted',
        orderPrice: 35500,
        storeId: 2,
        storeName: '홍길동 한식당',
        menus: [
          {
            menuId: 6,
            menuName: '치킨',
            menuCount: 1,
            optionGroup: [
              {
                optionGroupId: 3,
                optionGroupName: '야채',
                option: [
                  {
                    optionId: 89,
                    optionName: '파 추가',
                  },
                ],
              },
            ],
          },
          {
            menuId: 25,
            menuName: '치킨무',
            menuCount: 1,
            optionGroup: [],
          },
        ],
        address: {
          latitude: '37.5665',
          longitude: '126.9780',
          address: '서울시 블라',
          addressDetail: '몇동 몇호',
          zipCode: '12345',
        },
      },
      statusCode: 200,
      msg: 'success',
    })
  }),
]
