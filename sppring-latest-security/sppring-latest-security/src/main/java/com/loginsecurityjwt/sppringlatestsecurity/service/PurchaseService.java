package com.loginsecurityjwt.sppringlatestsecurity.service;

import com.loginsecurityjwt.sppringlatestsecurity.model.Purchase;
import com.loginsecurityjwt.sppringlatestsecurity.repository.projection.PurchaseItem;

import java.util.List;

public interface PurchaseService {
    Purchase savePurchase(Purchase purchase);

    List<PurchaseItem> findPurchaseItemsOfUser(Long userId);
}
