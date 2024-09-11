import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const storeDetailHandlers = [
  http.get(`${BASE_URL}/store/1`, ({ request }) => {
    return HttpResponse.json({
      response: {
        storeId: 1,
        storeName: '홍길동 한식당',
        contactNumber: '02-1234-5678',
        zipCode: '12345',
        address: '서울특별시 강남구 역삼동',
        addressDetail: '101호',
        latitude: 37.5665,
        longitude: 126.978,
        openTime: '10:00',
        closeTime: '22:00',
        category: 'Korean',
        deliveryArea: '강남구, 서초구',
        minimumPrice: 15000,
        reviewCount: 999,
        reviewRate: 4.5,
        thumbnails: [
          'https://via.placeholder.com/375x220?text=Image+1',
          'https://via.placeholder.com/375x220?text=Image+2',
        ],
        menus: [
          {
            menuId: 101,
            menuName: '비빔밥',
            description: '신선한 야채와 고소한 참기름이 어우러진 전통 비빔밥',
            menuPrice: 8000,
            menuImages: [
              'https://via.placeholder.com/100x100?text=Image+1',
              'https://via.placeholder.com/100x100?text=Image+2',
            ],
            optionGroups: [
              {
                optionGroupId: 201,
                optionGroupName: '추가 토핑',
                isRequired: true,
                options: [
                  {
                    optionId: 301,
                    optionName: '계란 추가',
                    optionPrice: 1000,
                  },
                  {
                    optionId: 302,
                    optionName: '고기 추가',
                    optionPrice: 2000,
                  },
                ],
              },
            ],
          },
          {
            menuId: 102,
            menuName: '산채비빔밥',
            description: '신선한 야채와 고소한 참기름이 어우러진 전통 비빔밥',
            menuPrice: 9000,
            menuImages: [
              'https://via.placeholder.com/100x100?text=Image+1',
              'https://via.placeholder.com/100x100?text=Image+2',
            ],
            optionGroups: [
              {
                optionGroupId: 201,
                optionGroupName: '추가 토핑',
                isRequired: true,
                options: [
                  {
                    optionId: 301,
                    optionName: '계란 추가',
                    optionPrice: 1000,
                  },
                  {
                    optionId: 302,
                    optionName: '고기 추가',
                    optionPrice: 2000,
                  },
                ],
              },
            ],
          },
          {
            menuId: 103,
            menuName: '소고기비빔밥',
            description: '신선한 야채와 고소한 참기름이 어우러진 전통 비빔밥',
            menuPrice: 11000,
            menuImages: [
              'https://via.placeholder.com/100x100?text=Image+1',
              'https://via.placeholder.com/100x100?text=Image+2',
            ],
            optionGroups: [
              {
                optionGroupId: 201,
                optionGroupName: '추가 토핑',
                isRequired: true,
                options: [
                  {
                    optionId: 301,
                    optionName: '계란 추가',
                    optionPrice: 1000,
                  },
                  {
                    optionId: 302,
                    optionName: '고기 추가',
                    optionPrice: 2000,
                  },
                ],
              },
            ],
          },
          {
            menuId: 104,
            menuName: '고기냉면',
            description: '신선한 야채와 고소한 참기름이 어우러진 전통 비빔밥',
            menuPrice: 9000,
            menuImages: [
              'https://via.placeholder.com/100x100?text=Image+1',
              'https://via.placeholder.com/100x100?text=Image+2',
            ],
            optionGroups: [
              {
                optionGroupId: 201,
                optionGroupName: '추가 토핑',
                isRequired: true,
                options: [
                  {
                    optionId: 301,
                    optionName: '계란 추가',
                    optionPrice: 1000,
                  },
                  {
                    optionId: 302,
                    optionName: '고기 추가',
                    optionPrice: 2000,
                  },
                ],
              },
            ],
          },
          {
            menuId: 105,
            menuName: '비빔냉면',
            description: '신선한 야채와 고소한 참기름이 어우러진 전통 비빔밥',
            menuPrice: 9000,
            menuImages: [
              'https://via.placeholder.com/100x100?text=Image+1',
              'https://via.placeholder.com/100x100?text=Image+2',
            ],
            optionGroups: [
              {
                optionGroupId: 201,
                optionGroupName: '추가 토핑',
                isRequired: true,
                options: [
                  {
                    optionId: 301,
                    optionName: '계란 추가',
                    optionPrice: 1000,
                  },
                  {
                    optionId: 302,
                    optionName: '고기 추가',
                    optionPrice: 2000,
                  },
                ],
              },
            ],
          },
        ],
      },
      statusCode: 200,
      msg: '음식점 조회',
    })
  }),
]
