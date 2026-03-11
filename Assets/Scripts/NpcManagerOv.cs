using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// npc管理
/// </summary>
public class NpcManagerOv : NpcManager
{
    public int maxPatienNum=6;//病人最大数量
    public int maxFarmerPatienNum=3;//农夫病人最大数量
    public List<Transform> areaLst;
    private List<PatientItem> mPatients=new List<PatientItem>();
    private List<PatientItem> mFarmerPatients=new List<PatientItem>();

    void Update()
    {
        EnemyCreate();
        PatientCreate();
        FammerPatientCreate();
    }

    private void PatientCreate()
    {
        if (mPatients.Count < maxPatienNum)
        {
            PatientItem e = PoolManager.instance.GetItem(ItemType.FigherPatient) as PatientItem;
            e.mRigidbody.isKinematic = false;
            e.transform.position = new Vector3(
                Random.Range(areaLst[0].position.x, areaLst[1].position.x),
                 e.transform.position.y,
                 Random.Range(areaLst[0].position.z, areaLst[1].position.z)
                );
            mPatients.Add(e);
            e.gameObject.SetActive(true);
        }
    }
    private void FammerPatientCreate()
    {
        if (mFarmerPatients.Count < maxFarmerPatienNum)
        {
            PatientItem e = PoolManager.instance.GetItem(ItemType.FarmerPatient) as PatientItem;
            e.mRigidbody.isKinematic = false;
            e.transform.position = new Vector3(
                Random.Range(areaLst[0].position.x, areaLst[1].position.x),
                 e.transform.position.y,
                 Random.Range(areaLst[0].position.z, areaLst[1].position.z)
                );
            mFarmerPatients.Add(e);
            e.gameObject.SetActive(true);
        }
    }


    public override void InitCustomer()
    {

    }
    public override void RemovePatient(PatientItem item)
    {
        if (item is FarmerPatientItem farmerPatient)
            mFarmerPatients.Remove(farmerPatient);
        else
            mPatients.Remove(item);
    }
    public override List<PatientItem> GetPatients(ItemType itemType)
    {
        if (itemType == ItemType.FigherPatient)
            return mPatients;
        else
            return mFarmerPatients;
    }

    //病人接入病床并刷新
    public override void DequeueCustomer()
    {
        
    }


    protected IEnumerator CustomerExit(PatientItem _customer,ItemStack stack,bool isPlayer)
    { 
        yield return null;
    }
}
