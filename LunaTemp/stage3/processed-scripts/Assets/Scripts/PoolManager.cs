using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// 对象池管理器
/// </summary>
public class PoolManager :MonoSingleton<PoolManager>
{
    public Queue<Item> mMoneys = new Queue<Item>();
    public Queue<Item> mRawMaterials = new Queue<Item>();
    public Queue<Item> mProducts = new Queue<Item>();
    public Queue<Enemy> mEnemys = new Queue<Enemy>();
    public Queue<Customer> mCustomers = new Queue<Customer>();
    public Queue<UIHealthBar> mEnemyhps = new Queue<UIHealthBar>();
    public Item mMoneyPrefab;
    public Item mRawMaterialPrefab;
    public Item mProductPrefab;
    public UIHealthBar mEnemyHpPrefab;

    public Enemy mEnemyPrefab;
    public Customer mCustomerPrefab;
    private void Start()
    {                
    
    }

    public UIHealthBar GetEnemyHp()
    {
        UIHealthBar hp =null;
        if (mEnemyhps.Count > 0)
        {
            hp= mEnemyhps.Dequeue();
        }
        else
        {
            hp = Instantiate(mEnemyHpPrefab, UIManager.instance.mEnemyHps);
        }

        return hp;
    }
    public Enemy GetEnemy()
    {
        Enemy _enemy = null;
        if (mEnemys.Count > 0)
        {
            _enemy = mEnemys.Dequeue();
        }
        else
        {
            _enemy = Instantiate(mEnemyPrefab, transform);
        }
        
        return _enemy;
    }
    public Customer GetCustomer()
    {
        Customer _Customer = null;
        if (mCustomers.Count > 0)
        {
            _Customer = mCustomers.Dequeue();
        }
        else
        {
            _Customer = Instantiate(mCustomerPrefab,transform);
        }

        return _Customer;
    }
    public Item GetItem(ItemType itemType)
    {
        Item obj = null;
        switch (itemType)
        {
            case ItemType.RawMaterial:
                if (mRawMaterials.Count > 0)
                {
                    obj = mRawMaterials.Dequeue();
                }
                else
                {
                    obj = Instantiate(mRawMaterialPrefab, this.transform);
                }
                break;
            case ItemType.Product:
                if (mProducts.Count > 0)
                {
                    obj = mProducts.Dequeue();
                    obj.gameObject.SetActive(true);
                    return obj;
                }
                else
                {
                    obj = Instantiate(mProductPrefab, this.transform);
                }
                break;
            case ItemType.Money:
                if (mMoneys.Count > 0)
                {
                    obj = mMoneys.Dequeue();
                }
                else
                {
                    obj = Instantiate(mMoneyPrefab, this.transform);
                }
                break;
            default:
                break;
        }
     //   obj.gameObject.SetActive(true);
        return obj;
    }

    public void ReturnItem(Item item)
    {
        switch (item.itemType)
        {
            case ItemType.RawMaterial:
                mRawMaterials.Enqueue(item);
                break;
            case ItemType.Product:
                mProducts.Enqueue(item);
                break;
            case ItemType.Money:
                mMoneys.Enqueue(item);
                break;
            default:
                break;
        }

        item.gameObject.SetActive(false);
    }

    public void ReturnEnemyHp(UIHealthBar _enemyhp)
    {
        StartCoroutine(WaitDoIE(0.5f,()=>
        {
            mEnemyhps.Enqueue(_enemyhp);
            _enemyhp.gameObject.SetActive(false);
        }));
     
    }

    public void ReturnEnemy(Enemy _enemy,float waittimes=1f)
    {
        StartCoroutine(WaitDoIE(waittimes, () =>
        {
            NpcManager.instance.mEnemies.Remove(_enemy);
            mEnemys.Enqueue(_enemy);
            _enemy.gameObject.SetActive(false);
        }));
       
    }
    public void ReturnCustomer(Customer _Customer)
    {
        mCustomers.Enqueue(_Customer);
        _Customer.gameObject.SetActive(false);

    }
    IEnumerator WaitDoIE(float waittimes,Action action)
    {
        yield return new WaitForSeconds(waittimes);
        action?.Invoke();
    }
}
